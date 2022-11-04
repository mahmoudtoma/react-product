import { GET_ALL_GATEGORY, ERROR, CREATE_CATEGORY } from '../Type'


const inital = {
    category: [],
    loading: true,
}

const CategoryReduser = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_GATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                category: action.payload,
                loading: false,
            }
        case ERROR: return {
            loading: true,
            category: action.payload,
        }
        default: return state;
    }
}

export default CategoryReduser