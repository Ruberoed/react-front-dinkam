import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { Box } from "@mui/system";



const RegInputs = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        // if (!data.payload) {
        //     return alert('pizda') 

        // }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            window.localStorage.setItem('username', data.payload.name)
        }
    }

    if (isAuth) {
        return <Navigate to="/37diamonds" />
    }


    return (
        <>
            <Box class="InputsReg" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="RegTitle" style={{ marginLeft: 25, marginBottom: 25, fontSize: 18 }}>Create Account</p>
                    <TextField className="NameInput"
                        placeholder="Your Name"
                        label="name"
                        type="text"
                        error={Boolean(errors.name?.message)}
                        helperText={errors.name?.message}
                        {...register('name', { required: 'Name is required' })}
                    /><br />
                    <TextField className="MailInput"
                        style={{ marginTop: 10 }}
                        placeholder="Your email"
                        label="email"
                        type="email"
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', { required: 'Mail is required' })}
                    /><br />
                    <TextField className="PasswordInput"
                        style={{ marginTop: 10 }}
                        placeholder="Your password"
                        label="password"
                        type="password"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'Password is required' })}
                    /><br />
                    <Button type="submit" className="SendFormReg" value="Register" onClick={onSubmit} />
                </form>
            </Box>
        </>
    )
}


export default RegInputs
