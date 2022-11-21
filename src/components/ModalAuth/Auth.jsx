import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Box, TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

const Inputs = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: 'vanyavanya@gmail.com',
            password: '1111111'
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            window.localStorage.setItem('username', data.payload.name)
                    } else {
            alert('N')
            console.log(values);
        }
    }

    if (isAuth) {
        return <Navigate to="/37diamonds" />
    }

    return (
        <>
            <Box class="Inputs">
                <p className="RegTitle" style={{ marginLeft: 60, fontSize: 18, marginBottom: 8 }}>Log in</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="MailInput"
                        placeholder="Your email"
                        label="email"
                        type="email"
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', { required: 'Post is required' })} />
                    <TextField className="PasswordInput"
                        style={{ marginTop: 10 }}
                        placeholder="Your password"
                        label="password"
                        type="text"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'Password is required' })}
                    />
                    <Button type="submit" className="SendFormReg" value="Sign in" />
                </form>
                <Link to="/register" ><p class="SignUp hov" style={{ marginRight: 140, marginTop: 7, }}>Sign up</p></Link>
                <a href="https://google.com"><p class="ForgotPass hov">Forgot Password?</p></a>
            </Box>
        </>
    )
}

export default Inputs
