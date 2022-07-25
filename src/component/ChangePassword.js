import React,{useState} from 'react'
import './ChangePassword.css'
import { Link } from 'react-router-dom';
const ChangePassword = () => {

    const[mail, setmail] = useState('');

  return (
    <>

<div className='changepassword-cls' style={{ backgroundColor:'#F5F6F8'}}>
<div className='form-class'>

<h3>Forgot password</h3>
<form>
    <div className='form-center-cls'>
    <label htmlFor="umail">Email</label>
    <input type="email" name="email" placeholder="enter an email" onChange={(e)=>setmail(e.target.value)} value={mail} />

    

    {/* <div style={{color:'red'}}>{error}</div> */}
    <button className='btn-cls'>Reset Password</button>
    {/* <button onClick={handleSubmit} type="button">Login</button> */}

    <Link to='/login' className='log-cls'>Back to login <i class="bi bi-chevron-down"></i></Link>
    
    </div>
</form>
</div>
</div>
    
    </>
  )
}

export default ChangePassword