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

const UserService = {
    USER_ANSWER, baseUrl, startDialog, continueDialog
}

export default UserService;