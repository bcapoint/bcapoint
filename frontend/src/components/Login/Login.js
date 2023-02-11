import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { toast,ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [passward, setPassword] = useState('')

  const login = () => {
    if (user === 'bcapoint_admin' && passward==='bcapoint786HRFZ@123') {
      sessionStorage.setItem('Token', user);
      toast.success('you are logged in!');
      navigate('/admin');
    }else{
      toast.error("you are not admin !")
    }
  }

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (token) {
      navigate('/admin');
    }

  }, [navigate]);


  return (
    <div className="login">
      <div className='loginContainer'>
        <form className="loginForm">
          <h4>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </h4>
          <div>
          <input type={'text'} placeholder={'enter username'} onChange={(e) => setUser(e.target.value)} />
          <input type={'password'} placeholder={'enter passward'} onChange={(e) => setPassword(e.target.value)} />
          <input className='sbm' type={'submit'} value='Login' onClick={login} />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login