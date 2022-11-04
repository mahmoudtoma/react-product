import { GET_ALL_GATEGORY, ERROR,CREATE_CATEGORY  } from "../Type";
import baseUrl from '../../Api/baseURL';
import useGetData from "../../Hooks/useGetData";
import {usePostDataWithImage} from "../../Hooks/usePostData"
export const getAllCategory = (limit) => async (dispatch) => {
    try {

        // get all category 
        const respons = await baseUrl.get(`/api/v1/categories?limit=${limit}`)
        dispatch({
            type: GET_ALL_GATEGORY,
            payload: respons.data,
        })

    } catch (e) {
        dispatch({
            type: ERROR,
            payload: "ERROR" + e,
        })
    }
}


// get all category with paginaion
export const getAllCategoryPage = (Page) => async (dispatch) => {
    try {

        const respons = await baseUrl.get(`/api/v1/categories?limit=4&page=${Page}`)
        dispatch({
            type: GET_ALL_GATEGORY,
            payload: respons.data,
        })

    } catch (e) {
        dispatch({
            type: ERROR,
            payload: "ERROR" + e,
        })
    }
}


//get all category with pagination
export const createCategory = (formData) => async (dispatch) => {

    try {
        const response = await usePostDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: ERROR,
            payload: "Error " + e,
        })
    }
}