import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:8080'

const USER_ANSWER = {
    YES: 'YES',
    NO: 'NO',
    SO_SO: 'SO_SO'
};
const startDialog = () => {
    return axios.get(baseUrl + "/question/get-init-question");
}

const continueDialog = (requestBody) => {
    console.log(requestBody)
    return axios.post(baseUrl + "/question/handle-answer", {
        questionId: requestBody.questionId,
        answer: requestBody.answer,
    });
}

const isDialogFinished = () => {
    return localStorage.getItem('dialog') !== null
}

const notifyDialogFinished = () => {
    localStorage.setItem('dialog', 'true')
}

const notifyDialogStarted= () => {
    localStorage.removeItem('dialog')
}

const getClubRecommendations = () => {
    return localStorage.getItem('club_recommendations')
}

const saveClubRecommendations = (recommendations) => {
    localStorage.setItem('club_recommendations', JSON.stringify(recommendations))
}

const resetClubRecommendations = () => {
    localStorage.removeItem('club_recommendations')
}

const getClubChoose = () => {
    return localStorage.getItem('club_choose')
}

const saveClubChoose = (club) => {
    localStorage.setItem('club_choose', JSON.stringify(club))
}

const resetClubChoose = () => {
    localStorage.removeItem('club_choose')
}

const UserService = {
    USER_ANSWER, baseUrl,
    startDialog, continueDialog,
    isDialogFinished, notifyDialogStarted, notifyDialogFinished,
    saveClubChoose, resetClubChoose, getClubChoose,
    saveClubRecommendations, resetClubRecommendations, getClubRecommendations
}

export default UserService;