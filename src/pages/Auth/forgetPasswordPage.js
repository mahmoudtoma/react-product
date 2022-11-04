import React from 'react'
import { Link } from 'react-router-dom'
import LogInHook from '../../Hook/Auth/LogInHook'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../Hook/Auth/forgetPasswordHook';

const forgetPasswordPage = () => {
  const [onChangeEmail,onsubmite,email] = ForgetPasswordHook();

  return (
    <div>
      <div id="login-box" style={{ display:"flex", textAlign:"center", width:"300px" }} >
        <div className="left">
          <h1 className='Sign-up' >Forget Password</h1>

          <input className='input-text' type="text" name="email" placeholder="E-mail" value={email} onChange={onChangeEmail}/>
          <div className='all-input-submit'>
            <input style={{width:"180px"}} className='input-submit' type="submit" name="signup_submit" value="send code" onClick={onsubmite} />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default forgetPasswordPage