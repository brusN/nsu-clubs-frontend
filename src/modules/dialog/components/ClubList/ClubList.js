import React from 'react';
import TextLink from "../../../general/components/TextLink/TextLink";

const ClubList = ({clubs, className, handleReset, handleOpenClubDescription}) => {
    return (
        <div className={className}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2>Смотри, что мы тебе подобрали!</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Клуб</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clubs.map((club) => {
                            return <tr>
                                <td>{club.name}</td>
                                <td><TextLink onClick={() => handleOpenClubDescription(club)}>Подробнее</TextLink></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <text>Если тебе ничего не понравилось, то сбрось результаты, нажав на кнопку ниже</text>
                <button className='mt-2 btn btn-outline-dark align-self-center' onClick={handleReset}>Начать заново</button>
            </div>
        </div>
    );
};
export default ClubList;