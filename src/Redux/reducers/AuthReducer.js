import { CREATE_NEW_USER, LOG_IN_USER, FORGET_PASSWORD } from './../Type';


const inital = {
    createUser: [],
    logUser: [],
    forgetPassword: [],
    loading: true,
}

const AuthReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false,

            }
        case LOG_IN_USER:
            return {
                ...state,
                logUser: action.payload,
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,

            }
        default: return state;
    }
}

export default AuthReducer