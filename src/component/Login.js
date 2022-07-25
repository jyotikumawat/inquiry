import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

  function Login() {


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmail= (e) =>{
      setEmail(e.target.value)
    }


    const handlePassword= (e) =>{
      setPassword(e.target.value)
    }
   

    const navigate = useNavigate();

    function handleSubmit (e){
      e.preventDefault();

      let item = {email, password,device_id:'asus'}

      const response =  fetch('https://echofounder.com/inquiry/sanctum', {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(item)
      }).then((response) => response.json())
      .then((result) => {
      localStorage.setItem('user_id', result.data.user_id)
      
      })
         navigate('/Dashboard')
         

      
      }

  return (
      <>
      <div className='login-form-cls' style={{ backgroundColor:'#F5F6F8'}}>
    <div className='form-cls'>

        <h3>Login</h3>
        <form>
            <div className='form-center'>
            <label htmlFor="umail">Email</label>
            <input type="email" name="email" placeholder="enter an email" onChange={handleEmail}  />

            <label  htmlFor="psw">Password</label>
            <input type="password" name="password" placeholder="enter a password"  onChange={handlePassword} />

            {/* <div style={{color:'red'}}>{error}</div> */}
            <button className='log' onClick={handleSubmit}>Login</button>

            <p className='login-p-cls'>
            <Link to='/changepassword' className='login-cls pt-4'>Forgot password</Link>
            </p>
            {/* <button onClick={handleSubmit} type="button">Login</button> */}
            
            </div>
        </form>
    </div>
    </div>

    </>
  )
}

export default Login