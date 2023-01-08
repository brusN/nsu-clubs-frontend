import React, {useEffect, useState} from 'react';
import UserService from "../../../../service/UserService";

const ChosenClubDescription = ({classname, handleReset}) => {
    const [chosenClub, setChosenClub] = useState({})

    useEffect(() => {
        setChosenClub(JSON.parse(UserService.getClubChoose()))
    }, [])

    return (
        <div className={classname}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3>Ты выбрал "{chosenClub.name}"!</h3>
                <a>{chosenClub.vkLink}</a>
                <text className='mt-2'>{chosenClub.description}</text>
                <text className='mt-2'>или</text>
                <button className='mt-2 btn btn-outline-dark align-self-center' onClick={handleReset}>Начать заново
                </button>
            </div>
        </div>
    );
};

export default ChosenClubDescription;