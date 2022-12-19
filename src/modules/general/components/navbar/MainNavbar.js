import React, {useContext} from 'react';
import './MainNavbar.css'
import {NavbarBrand} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ApiContext} from "../../../../context/ApiContext";
const MainNavbar = () => {
    const { username, setUsername } = useContext(ApiContext)
    const navigate = useNavigate()

    const navigateToSignIn = () => {
        navigate('/')
    }
    const logout = () => {
        setUsername(null)
        navigate('/')
    }

    const renderButton = () => {
        return username == null
            ? <button className='btn btn-outline-light' onClick={navigateToSignIn}>Войти</button>
            : <button className='btn btn-outline-light' onClick={logout}>Выйти</button>
    }

    return (
        <nav className="navbar navbar-dark main-navbar d-flex justify-content-center">
            <div className='d-flex flex-row align-items-center justify-content-start w-50'>
                <NavbarBrand className="navbar-brand">NSU Clubs</NavbarBrand>
            </div>
            <div className='d-flex justify-content-end'>
                {renderButton()}
            </div>
        </nav>
    );
};

export default MainNavbar;