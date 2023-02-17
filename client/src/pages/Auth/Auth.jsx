import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon3.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 
  const handleSwitch = () => {
    setIsSignup(!isSignup)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()  

    if (!email && !password)
    {
      alert("Please enter email and password to continue")
    }

    if (isSignup)
    {
      if (!name)
      {
        alert("Please enter a name to continue")
      }
      dispatch(signup({name,email,password}, navigate))
    }
    else
    {
      dispatch(login({ email, password }, navigate))  
    }
    
    //console.log({name,email,password})
  }


  const windowSize = useRef([window.innerWidth, window.innerHeight]);


  return (
    <section className='auth-section'>
      {
        windowSize.current[0] >= 500 ?
          <>
            { isSignup && <AboutAuth/> }
          </> :
          <>
          </>
      }
      
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display name</h4>
                <input type='text' name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }

          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor='password'>
            <div style={{ display: 'flex', justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!isSignup &&<Link to='/forgot-password'> <p style={{ color:'#007ac6', fontSize:'13px', textDecoration:'none'}}>Forgot password?</p></Link>}
            </div>
            <input type='password' name='password' id='password' onChange={(e) => { setPassword(e.target.value) }}  />
            {isSignup && <p style={{fontSize:'13px'}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number. </p>}
          </label>

          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' name='check' id='check' />
              <p style={{ fontSize:'13px'}}>Opt-in to receive occasional product<br/> updates, user research invitations,<br/> company announcements, and digests.</p>
            </label>
          ) }

          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log In'}</button>
          {
            isSignup && (
              <p style={{color:'#666767', fontSize:'13px'}}>By clicking “Sign up”, you agree to our
                <span style={{color:'#007ac6'}}>terms of<br /> service</span>,
                <span style={{color:'#007ac6'}}>privacy policy </span>and
                <span style={{color:'#007ac6'}}>cookie policy</span></p>
          )  }
        </form>
        
        <p>
          {isSignup ? 'Already have an account' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? 'Log In' : 'Sign Up'}</button>
        </p>
      </div>
      {
        windowSize.current[0] >= 500 ?
          <>
          </> :
          <>
            {isSignup && <h1>Join the Stack Overflow community</h1>}
          </>
      }
      
    </section>
  )
}

export default Auth
