import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon3.png'
// import { login } from '../../actions/auth'
//  import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')

// const dispatch = useDispatch()
//   const navigate = useNavigate()
  
  const handleSubmit = (e) => {
      e.preventDefault()  
      
    //   const data = {
    //       email: email.value
    //   };

    // axios.post('Forgot', email).then(
    //     res => {
    //         console.log(res)
    //     }
    // ).catch(
    //     err => {
    //         console.log(err);
    //     }
    // )
    // console.log(email)
    // fetch("https://stack-overflow.herokuapp.com/forgot-password", {
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      });
      }
    

    
    // <label htmlFor='password'>
    //         <div style={{ display: 'flex', justifyContent:'space-between'}}>
    //           <h4>Password</h4>
    //           <p style={{ color:'#007ac6', fontSize:'13px'}}>Forgot password?</p>
    //         </div>
    //         <input type='password' name='password' id='password' onChange={(e) => { setPassword(e.target.value) }}  />
    //         <p style={{fontSize:'13px'}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number. </p>
    //       </label>
    
  return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <img src={icon} alt='stack overflow' className='login-logo' />
        <form onSubmit={handleSubmit}>
          <h3>Forgot Password</h3>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>

          <button type='submit' className='auth-btn'>Submit</button>
          
        </form>
        
        
      </div>
    </section>
  )
}

export default ForgotPassword
