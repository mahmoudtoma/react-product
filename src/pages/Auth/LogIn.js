import React from 'react'
import { Link } from 'react-router-dom'
import LogInHook from '../../Hook/Auth/LogInHook'
import { ToastContainer } from 'react-toastify';

const LogIn = () => {
  const [email, password, onChangeEmail, onChangePasswprd, onsubmite] = LogInHook();
  return (
    <div>
      <div id="login-box">
        <div className="left">
          <h1 className='Sign-up' >Sign in</h1>

          <input className='input-text' type="text" name="email" placeholder="E-mail" value={email} onChange={onChangeEmail} />
          <input className='input-password' type="password" name="password" placeholder="Password" value={password} onChange={onChangePasswprd} />
          <div className='all-input-submit'>
            <input className='input-submit' type="submit" name="signup_submit" value="Sign In" onClick={onsubmite} />
            <Link to="/LogUp"><input className='input-submit' type="submit" name="signup_submit" value="Sign Up" /></Link>
          </div>
          <Link to="/user/forgetPassword">
            <div style={{marginTop:"30px"}} >Did you forget your password?</div>
          </Link>
        </div>

        <div className="right">
          <span className="loginwith">Sign in with<br />social network</span>

          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <Link to="/admin/allproduct">
          <div><a>ِAdmin</a></div>
        </Link>
        <hr></hr>
        <Link to="/user/allorder">
          <div><a>User</a></div>
        </Link>
      </div>


      <ToastContainer />
    </div>
  )
}

export default LogIn