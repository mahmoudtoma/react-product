import baseUrl from "../Api/baseURL";


const usePostDataWithImage = async (url, params) => {
    const config = {
        headers: {"Content-Type" : "multipart/form-data"}
    }
    const res = await baseUrl.post(url, params, config)
    return res.data;
}


const usePostData = async (url, params) => {
    const res = await baseUrl.post(url, params)
    return res.data;
}


export { usePostData, usePostDataWithImage };