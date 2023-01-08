import React, {useContext} from 'react';
import './WelcomePage.css'
import NsuLogo from '../../../assets/logo/Novosibirsk_State_University_Logo.svg'
import {ApiContext} from "../../../context/ApiContext";
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
    const {isAuthorized} = useContext(ApiContext)
    const navigate = useNavigate()
    const handleStartButtonClick = () => {
        if (isAuthorized() === true) {
            navigate('/dialog')
        } else {
            navigate('/signin')
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center welcome-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <h1 className='mt-auto mt-5 mb-3 '>Добро пожалововать в NSU Clubs</h1>
                <h5>В ходе короткой беседы мы посоветуем клубы, которые обязательно тебе понравятся!</h5>
                <button className='mt-1 btn btn-lg btn-outline-dark' onClick={handleStartButtonClick}>Начать</button>
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>
        </div>
    );
};

export default WelcomePage;