import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from './../UseNotifaction';
import { forgetPassword } from './../../Redux/actions/AuthAction';
const ForgetPasswordHook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)

const onChangeEmail =(e)=> {
    setEmail(e.target.value);
}

const onsubmite = async ()=> {
    setLoading(true)
    await dispatch(forgetPassword({
        email,
    }))
    setLoading(false)
}
const res = useSelector(state => state.AuthReducer.forgetPassword)

useEffect(() => {
    if(loading === false){
        if(res){
            console.log(res)
        }
    }
}, [loading])

    return [onChangeEmail,onsubmite,email]
}

export default ForgetPasswordHook