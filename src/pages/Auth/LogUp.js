import React from 'react';
import { Link } from 'react-router-dom';
import LogUpHook from '../../Hook/Auth/LogUpHook';
import { ToastContainer } from 'react-toastify';
const LogUp = () => {


    const [name, email, password, confirmPassword, loading, onChangeName,
        onChangeEmail, onChangePasswprd, onChangepasswordConfirm,
        OnSubmit] = LogUpHook();

    return (
        <div>
            <div id="login-box">
                <div className="left">
                    <h1 className='Sign-up' >Sign up</h1>


                    <input className='input-text' value={name} onChange={onChangeName} type="name" name="username" placeholder="Username" />
                    <input className='input-text' value={email} onChange={onChangeEmail} type="email" name="email" placeholder="E-mail" />
                    <input className='input-password' value={password} onChange={onChangePasswprd} type="password" name="password" placeholder="Password" />
                    <input className='input-password' value={confirmPassword} onChange={onChangepasswordConfirm} type="password" name="password2" placeholder="Retype password" />
                    <div className='all-input-submit'>
                        <input className='input-submit' type="submit" name="signup_submit" value="Sign me up" onClick={OnSubmit} />
                        <Link to='/LogIn'><input className='input-submit' type="submit" name="signup_submit" value="Sign In" /></Link>
                    </div>
                    <div className='rghite-tow'>
                        <button className="social-signin facebook Social">Log in with facebook</button>
                        <button className="social-signin twitter Social">Log in with Twitter</button>
                        <button className="social-signin google Social">Log in with Google+</button>
                    </div>
                </div>

                <div className="right">
                    <span className="loginwith">Sign in with<br />social network</span>

                    <button className="social-signin facebook">Log in with facebook</button>
                    <button className="social-signin twitter">Log in with Twitter</button>
                    <button className="social-signin google">Log in with Google+</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default LogUp