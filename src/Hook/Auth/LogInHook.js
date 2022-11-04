import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../Redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import notify from './../UseNotifaction';
const LogInHook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePasswprd = (e) => {
        setPassword(e.target.value)
    }

    const onsubmite = async () => {
        setLoading(true)
        console.log(loading)
        await dispatch(logInUser({
            email,
            password
        }))
        setLoading(false)
        console.log(loading)
    }
    const res = useSelector(state => state.AuthReducer.logUser)
   
  /*  useEffect(() => {
        if (loading === false) {
            console.log(loading)

            if (res) {
                console.log(res)
                if (res.token) {
                    console.log(res.token)
                    localStorage.setItem("token", res.token)
                } else {
                    localStorage.removeItem("token")
                 
                }

                setLoading(true)
            }
        }
    }, [loading])*/

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.token) {
                    console.log(res.token)
                    notify("You are logged in successfully", "success")
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("user", JSON.stringify(res.data))
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1500);
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }

                if (res.data.message === "Incorrect email or password") {
                    console.log(res.data.message)
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("Incorrect email or password", "error")
                }
                setLoading(true)
            }
        }
    }, [loading])

    return [email, password, onChangeEmail, onChangePasswprd, onsubmite]
}

export default LogInHook