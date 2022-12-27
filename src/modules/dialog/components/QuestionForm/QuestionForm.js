import React from 'react';

const QuestionForm = ({handleYes, handleNo, handleSoSo, question, classname}) => {

    return (
        <div className={classname}>
            <div className='d-flex justify-content-center card p-4'>
                <h2 className='align-self-center mb-3'>{question.questionEntry}</h2>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-outline-success w-25' onClick={handleYes}>Да</button>
                    <button className='btn btn-outline-danger w-25' onClick={handleNo}>Нет</button>
                    <button className='btn btn-outline-warning w-25' onClick={handleSoSo}>Точно не знаю</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionForm;