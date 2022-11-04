import { CREATE_SUBCATEGORY, ERROR } from "../Type";
import baseUrl from "../../Api/baseURL";


export const createsubCategory = (Data) => async (dispatch) => {

    try {
        const response = await baseUrl.post(`/api/v1/subcategories`, Data);
        dispatch({
            type: CREATE_SUBCATEGORY,
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




