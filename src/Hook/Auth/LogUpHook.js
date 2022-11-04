import { useState, useEffect } from 'react'
import notify from '../UseNotifaction';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../Redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
const LogUpHook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setpasswordConfirm] = useState('')
    const [loading, setLoading] = useState(true)

    // input value
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePasswprd = (e) => {
        setPassword(e.target.value)
    }
    const onChangepasswordConfirm = (e) => {
        setpasswordConfirm(e.target.value)
    }

    // Input error
    /* const ValidationValues = () => {
         if (name === "") {
             notify("Enter Name", "error")
             return;
         }
         if (email === "") {
             notify("Enter Email", "error")
             return;
         }
         if (password === "") {
             notify("Enter Password", "error")
             return;
         }
         if (passwordConfirm === "") {
             notify("ُEnter Confirm Password", "error")
             return;
         }
         if (password !== passwordConfirm) {
             notify("من فضلك تاكيد من كلمه السر", "error")
             return;
         }
     }*/

    const res = useSelector(state => state.AuthReducer.createUser)
    // Save Data
    const OnSubmit = async () => {
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm,
        }))

        setLoading(false)
        console.log(loading)

    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    notify("You are logged in successfully", "success")
                    setTimeout(() => {
                        navigate('/LogIn')
                    }, 2000);
                }
                if (res.data.errors) {
                    console.log(res.data.errors[0].msg)
                    if (res.data.errors[0].msg === "E-mail already in use") {
                        notify("E-mail already in use", "error")
                    }
                    if (res.data.errors[0].msg === "must be at least 6 chars") {
                        notify("must be at least 6 chars", "error")
                    }
                }

            }
        }
    }, [loading])

    return [name, email, password, passwordConfirm, loading, onChangeName, onChangeEmail, onChangePasswprd, onChangepasswordConfirm,
        OnSubmit]
}

export default LogUpHook