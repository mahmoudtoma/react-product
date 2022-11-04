import { combineReducers } from "redux";
import CategoryReduser from './CategoryReducer'
import BrandReducer from "./BrandReducer";
import subCategoryReduser from "./subCategoryReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({


    allCategory: CategoryReduser,
    allBrand:BrandReducer,
    allSubCategory:subCategoryReduser,
    AuthReducer:AuthReducer,
})