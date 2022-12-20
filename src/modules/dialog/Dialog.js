import React, {useEffect, useState} from 'react';
import NsuLogo from "../../assets/logo/Novosibirsk_State_University_Logo.svg";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import UserService from "../../service/UserService";
import questionForm from "./components/QuestionForm/QuestionForm";
import ClubList from "./components/ClubList/ClubList";

const Dialog = () => {
    const [isDialogFinished, setIsDialogFinished] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});

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

    const renderForm = () => {
        if (isDialogFinished) {
            return <ClubList
                className='mt-auto w-75'
                clubs={currentQuestion.clubs}
                handleReset={handleReset} />
        } else {
            return <QuestionForm
                classname='mt-auto w-75'
                question={currentQuestion}
                handleYes={handleYesAnswer}
                handleNo={handleNoAnswer}
                handleSoSo={handleSoSoAnswer} />
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