import React from 'react';
import {Card} from "react-bootstrap";

const Notify = ({text, handleClose, className}) => {

    return (
        <div className={className}>
            <Card className='d-flex justify-content-center align-items-center'>
                <Card.Body>
                        <h2>Интересный факт!</h2>
                        <Card.Text>{text}</Card.Text>
                </Card.Body>
                <button className='btn btn-outline-dark mb-2 align-self-end m-3' onClick={handleClose}>Продолжить</button>
            </Card>
        </div>
    );
};

export default Notify;