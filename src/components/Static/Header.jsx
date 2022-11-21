import React from 'react';
import Popup from 'reactjs-popup';
import logo from '../../images/logo.svg'
import "../../style.css"
import Inputs from '../ModalAuth/Auth';
import RegInputs from '../ModalAuth/Register.jsx'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useSelector, useDispatch } from "react-redux";

const username = window.localStorage.username

const Profile = (res) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)

    

    const onClickLogout = () => {
        if (window.confirm('R u really want to ')) {
            dispatch(logout())
        }
    };
 
    if (isAuth) {
        return (
            <>
                <Box className='NavLeft' sx={{ mr: 27 }} style={{ display: 'inline-flex', fontFamily: 'Russo One' }}>
                    <Typography style={{ fontFamily: 'Russo One' }} sx={{ mr: 10 }}>
                        { username }
                    </Typography>
                    <Link onClick={onClickLogout}>
                        <Typography style={{ fontFamily: 'Russo One' }}>
                            Logout
                        </Typography>
                    </Link>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box style={{ display: 'inline-flex' }} sx={{ mr: 33 }} >
                    <Box sx={{ mr: 10 }}>
                        <Popup trigger={<Typography id='sign' className='btnLogIn hov' />} modal nested >{close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="content">
                                    <Inputs />
                                </div>
                            </div>
                        )}</Popup>
                    </Box>
                    <Box>
                        <Popup trigger={<Typography id='login' className='btnSign hov' />} modal nested >{close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="content">
                                    <RegInputs />
                                </div>
                            </div>
                        )}</Popup>
                    </Box>
                </Box>
            </>
        )
    }
}

export const Header = () => {
    return (
        <>
            <div className='header'>
                <Box width={1000} style={{ fontFamily: 'Russo One', }}>
                    <Profile />
                    <Link className="logo" style={{}} to="/home">
                        <img src={logo} style={{ width: 170, marginBottom: -15, }} alt="LOGO" />
                    </Link>
                    <Box className='NavRight' style={{ display: 'inline' }} sx={{ ml: 30 }}>
                        <Typography style={{ display: 'inline' }} sx={{ mr: 10 }} >
                            <Link to='/profile' id='cart' className='btnCart hov' />
                        </Typography>
                        <Typography style={{ display: 'inline' }}>lll</Typography>
                    </Box>
                </Box>
            </div>
        </>
    )
}