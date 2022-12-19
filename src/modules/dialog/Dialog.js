import React, {useEffect} from 'react';
import NsuLogo from "../../assets/logo/Novosibirsk_State_University_Logo.svg";
import DialogForm from "./components/DialogForm/DialogForm";

const Dialog = () => {


    useEffect(() => {

    }, []);

    return (
        <div className='d-flex justify-content-center signin-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100 w-50'>
                <h1 className='mt-auto'>Вопросы</h1>
                <DialogForm />
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>
        </div>
    );
};

export default Dialog;