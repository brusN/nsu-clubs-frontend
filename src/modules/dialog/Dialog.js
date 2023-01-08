import React, {useEffect, useState} from 'react';
import NsuLogo from "../../assets/logo/Novosibirsk_State_University_Logo.svg";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import UserService from "../../service/UserService";
import ClubList from "./components/ClubList/ClubList";
import Notify from "./components/Notify/Notify";
import ChosenClubDescription from "./components/ChosenClubDescription/ChosenClubDescription";
import ClubDescriptionModal from "./components/ClubDescriptionModal/ClubDescriptionModal";

const Dialog = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [previousQuestionFact, setPreviousQuestionFact] = useState(null);
    const [isShowClubDescriptionModal, setIsShowClubDescriptionModal] = useState(false)
    const [chosenClub, setChosenClub] = useState({})

    useEffect(() => {
        if (UserService.isDialogFinished() === false) {
            startDialog();
        }
    }, []);

    const startDialog = () => {
        UserService.startDialog()
            .then((response) => {
                console.log(response.data)
                setCurrentQuestion(response.data);
                UserService.resetClubRecommendations()
                UserService.resetClubChoose()
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

            // Check for the last question
            setPreviousQuestionFact(response.data.factForLastQuestion);
            if (response.data.questionId === null) {
                UserService.notifyDialogFinished()
                UserService.saveClubRecommendations(response.data.clubs)
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
        UserService.notifyDialogStarted()
        startDialog();
    }

    const handleCloseFactNotify = () => {
        setPreviousQuestionFact(null);
    }

    const handleOpenClubDescription = (club) => {
        setChosenClub(club)
        setIsShowClubDescriptionModal(true)
    }

    const handleClubDescriptionModalClose = () => {
        setIsShowClubDescriptionModal(false)
    }

    const handleClubChoose = () => {
        UserService.saveClubChoose(chosenClub)
        setIsShowClubDescriptionModal(false)
    }

    const renderResults = () => {
        const clubChoose = UserService.getClubChoose()

        // If club not chosen, then display recommendations
        if (clubChoose === null) {
            const recommendations = JSON.parse(UserService.getClubRecommendations())
            return (
                <div className='mt-auto w-75'>
                    <ClubList
                        clubs={recommendations}
                        handleReset={handleReset}
                        handleOpenClubDescription={handleOpenClubDescription}
                    />
                </div>
            );
        }

        // Else display chosen club
        return (
            <div className='mt-auto'>
                <ChosenClubDescription handleReset={handleReset}/>
            </div>
        );
    }

    const renderTestForm = () => {
        console.log('Render test form')
        if (previousQuestionFact !== null) {
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

    const renderForm = () => {
        if (UserService.isDialogFinished() === true) {
            return renderResults()
        } else {
            return renderTestForm()
        }
    }

    return (
        <div className='d-flex justify-content-center signin-page-container'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100 w-50'>
                {renderForm()}
                <img className='mt-auto' src={NsuLogo} alt="NSU logo"/>
            </div>

            <ClubDescriptionModal
                isShow={isShowClubDescriptionModal}
                handleClose={handleClubDescriptionModalClose}
                handleClubChoose={handleClubChoose}
                club={chosenClub} />
        </div>
    );
};

export default Dialog;