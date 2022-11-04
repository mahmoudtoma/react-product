import { GET_ALL_BRAND, ERROR, CREATE_BRAND } from "../Type";
import baseUrl from '../../Api/baseURL';
import useGetData from "../../Hooks/useGetData";
import { usePostDataWithImage } from "../../Hooks/usePostData"


// get all brand 
export const getAllBrand = (limit) => async (dispatch) => {
    try {

       const respons = await baseUrl.get(`/api/v1/brands?limit=${limit}`)
        dispatch({
            type: GET_ALL_BRAND,
            payload: respons.data,
        })

    } catch (e) {
        dispatch({
            type: ERROR,
            payload: "ERROR" + e,
        })
    }
}


// get all brand with paginaion
export const getAllBrandPage = (Page) => async (dispatch) => {
    try {

        const respons = await baseUrl.get(`/api/v1/brands?limit=4&page=${Page}`)
        dispatch({
            type: GET_ALL_BRAND,
            payload: respons.data,
        })

    } catch (e) {
        dispatch({
            type: ERROR,
            payload: "ERROR" + e,
        })
    }
}


//get all brand with pagination
export const createBrand = (formData) => async (dispatch) => {

    try {
        const response = await usePostDataWithImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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