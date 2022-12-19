import React, {useContext} from 'react';
import './MainNavbar.css'
import {NavbarBrand} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ApiContext} from "../../../../context/ApiContext";

const MainNavbar = () => {
    const {username, setUsername} = useContext(ApiContext)
    const navigate = useNavigate()

    const navigateToSignIn = () => {
        navigate('/signin')
    }
    const logout = () => {
        setUsername(null)
        localStorage.removeItem("username")
        navigate('/')
    }

    const navigateToHomePage = () => {
        navigate('/')
    }

    const handleLogoutButtonClick = () => {
        logout()
        navigateToHomePage()
    }

    const renderButton = () => {
        return username === null
            ? <button className='btn btn-outline-light' onClick={navigateToSignIn}>Войти</button>
            : <button className='btn btn-outline-light mx-3' onClick={handleLogoutButtonClick}>Выйти</button>
    }

    const renderNickname = () => {
        return username === null
            ? null
            : <div className='nickname-label'>{username}</div>
    }

    return (
        <nav className="navbar navbar-dark main-navbar d-flex justify-content-center w-100">
            <div className='d-flex align-items-center w-50'>
                <NavbarBrand className="navbar-brand" onClick={navigateToHomePage}>NSU Clubs</NavbarBrand>
            </div>
            <div className='d-flex align-items-center'>
                {renderNickname()}
                {renderButton()}
            </div>
        </nav>
    );
};

export default MainNavbar;