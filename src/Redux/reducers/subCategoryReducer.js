import { CREATE_SUBCATEGORY, ERROR} from '../Type'


const inital = {
    subCategory: [],
    loading: true,
}

const subCategoryReduser = (state = inital, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subCategory: action.payload,
                loading: false,
            }
        case ERROR: return {
            loading: true,
            subCategory: action.payload,
        }
        default: return state;
    }
}

export default subCategoryReduser