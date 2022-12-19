import React from 'react';
import './WelcomePage.css'
import NsuLogo from '../../../../assets/logo/Novosibirsk_State_University_Logo.svg'

const WelcomePage = () => {
    return (
        <div className='d-flex flex-column justify-content-center welcome-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <h1 className='mt-auto mt-5 mb-3 '>Добро пожалововать в NSU Clubs</h1>
                <button className='btn btn-lg btn-outline-dark'>Начать</button>
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>
        </div>
    );
};

export default WelcomePage;