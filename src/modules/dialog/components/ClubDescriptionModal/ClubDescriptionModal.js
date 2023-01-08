import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ClubDescriptionModal = ({isShow, handleClose, handleClubChoose, club}) => {
    return (
        <Modal onHide={handleClose} show={isShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{club.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{club.description}</p>
                <a>Контакты клуба: {club.vkLink}</a>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-success w-100' onClick={handleClubChoose}>Выбрать клуб</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ClubDescriptionModal;