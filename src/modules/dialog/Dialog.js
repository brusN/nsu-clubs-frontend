import React, {useEffect, useState} from 'react';
import NsuLogo from "../../assets/logo/Novosibirsk_State_University_Logo.svg";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import UserService from "../../service/UserService";
import ClubList from "./components/ClubList/ClubList";
import Notify from "./components/Notify/Notify";

const Dialog = () => {
    const [isDialogFinished, setIsDialogFinished] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [previousQuestionFact, setPreviousQuestionFact] = useState(null);

    useEffect(() => {
        startDialog();
    }, []);

    const startDialog = () => {
        UserService.startDialog()
            .then((response) => {
                console.log(response.data)
                setCurrentQuestion(response.data);
                setIsDialogFinished(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const answerQuestion = (answer) => {
        UserService.continueDialog({
            "questionId": currentQuestion.questionId,
            "answer": answer
        }).then((response) => {
            console.log(response.data)
            setCurrentQuestion(response.data);
            setPreviousQuestionFact(response.data.factForLastQuestion);
            if (response.data.questionId === null) {
                setIsDialogFinished(true);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleYesAnswer = () => {
        answerQuestion(UserService.USER_ANSWER.YES.toString())
    }

    const handleNoAnswer = () => {
        answerQuestion(UserService.USER_ANSWER.NO.toString())
    }

    const handleSoSoAnswer = () => {
        answerQuestion(UserService.USER_ANSWER.SO_SO.toString())
    }

    const handleReset = () => {
        setIsDialogFinished(false);
        startDialog();
    }

    const handleCloseFactNotify = () => {
        setPreviousQuestionFact(null);
    }

    const renderForm = () => {
        if (isDialogFinished) {
            return (
                <div className='mt-auto w-75'>
                    <ClubList
                        clubs={currentQuestion.clubs}
                        handleReset={handleReset}/>
                </div>
            );
        } else if (previousQuestionFact !== null) {
            return (
                <Notify
                    className='mt-auto'
                    text={previousQuestionFact}
                    handleClose={handleCloseFactNotify}
                />);
        } else {
            return (
                <div className='mt-auto w-75'>
                    <QuestionForm
                        question={currentQuestion}
                        handleYes={handleYesAnswer}
                        handleNo={handleNoAnswer}
                        handleSoSo={handleSoSoAnswer}/>
                </div>
            );
        }
    }

    return (
        <div className='d-flex justify-content-center signin-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100 w-50'>
                {renderForm()}
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>
        </div>
    );
};

export default Dialog;