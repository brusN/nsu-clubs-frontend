import React, {useContext, useState} from 'react';
import './SignIn.css'
import NsuLogo from "../../../../assets/logo/Novosibirsk_State_University_Logo.svg";
import SignInForm from "./components/SignInForm";
import './SignIn.css'
import {useNavigate} from "react-router-dom";
import {ApiContext} from "../../../../context/ApiContext";

const SignIn = () => {
    const {setUsername} = useContext(ApiContext)
    const navigate = useNavigate();
    const login = (formUsername) => {
        setUsername(formUsername)
        localStorage.setItem("username", formUsername)
        navigate('/dialog')
    }

    return (
        <div className='d-flex justify-content-center signin-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100 w-50'>
                <h1 className='mt-auto mt-5 mb-3 '>Вход в приложение</h1>
                <SignInForm
                    login={login}
                    className='w-25'
                />
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>
        </div>
    );
};

export default SignIn;