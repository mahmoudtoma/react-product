import baseUrl from "../Api/baseURL";


const useGetData = async (URL, params) => {
    const res = await baseUrl.get(URL, params)
    return res.data ;
}


export default useGetData;