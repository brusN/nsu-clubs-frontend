import React from 'react';

const ClubList = ({clubs, className, handleReset}) => {

    return (
        <div className={className}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2>Смотри, что мы тебе подобрали!</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Клуб</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clubs.map((club) => {
                            return <tr>
                                <td>{club.name}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <button className='btn btn-outline-dark align-self-center' onClick={handleReset}>Начать заново</button>
            </div>
        </div>);
};
export default ClubList;