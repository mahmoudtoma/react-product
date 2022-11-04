import { GET_ALL_BRAND, ERROR, CREATE_BRAND } from '../Type'


const inital = {
    barnd: [],
    loading: true,
}

const BrandReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }
        case CREATE_BRAND:
            return {
                brand: action.payload,
                loading: false,
            }
        case ERROR: return {
            loading: true,
            brand: action.payload,
        }
        default: return state;
    }
}

export default BrandReducer