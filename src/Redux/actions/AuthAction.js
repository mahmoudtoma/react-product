import { CREATE_NEW_USER, LOG_IN_USER, FORGET_PASSWORD } from "../Type";

import { usePostData } from "../../Hooks/usePostData"
import { useInsertData } from "../../Hooks/useInsertData";


// create new user 
export const createNewUser = (data) => async (dispatch) => {

    try {
        const response = await usePostData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}
// log In User
export const logInUser = (data) => async (dispatch) => {

    try {
        const response = await usePostData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOG_IN_USER,
            payload: response,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: LOG_IN_USER,
            payload: e.response,
        })
    }
}

// forget password
export const forgetPassword = (data) => async (dispatch) => {

    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
        })
    }
}