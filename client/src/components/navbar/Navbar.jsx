import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import { useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import decode from 'jwt-decode'
//import logo from '../../assets/Screenshot from 2023-01-08 16-48-23.png'
import logo from '../../assets/Stack_Overflow_logo1.png'
import search from '../../assets/search.svg'
import './navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
//let Logo = require('../../assets/logo.png');
//<img src={require('../../assets/logo.png')} alt="React Logo"/>


/* <Link to="/" className='nav-item nav-btn'>About</Link>
         <Link to="/Subscribe" className='nav-item nav-btn'>Products</Link>
         <Link to="/" className='nav-item nav-btn'>For Teams</Link>
         <form>
           <input type="text" placeholder='Search' />
           <img style={{width:18,height:25}} src={search} alt="Search" className='search-icon'/>
         </form> */


const Navbar = () => {
  //var User=null
  const navigate = useNavigate()
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  
  useEffect(() => {

    const token = User?.token

    if (token)
    {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime())
      {
        handleLogout()
      }
    }
      
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    //eslint-disable-next-line
  }, [dispatch])
  
  //<Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor="#009dff" px="12px" py="8px" borderRadius="50%" color="white" >{ User?.result?.name.charAt(0).toUpperCase() }</Avatar></Link>

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  //const size = window.innerWidth;

    return(
    <nav className='main-nav'>
      <div className='navbar'>
        
          
          {
            windowSize.current[0] >= 500 ? 
              <>
              <Link to='/' className='nav-item nav-logo'>
                < img src={logo} alt='logo' className='main-logo'/>
              </Link>
              <Link to="/" className='nav-item nav-btn'>About</Link>
              <Link to="/Subscribe" className='nav-item nav-btn'>Products</Link>
              <Link to="/" className='nav-item nav-btn'>For Teams</Link>
              <form>
                <input type="text" placeholder='Search' />
                <img style={{width:18,height:25}} src={search} alt="Search" className='search-icon'/>
                </form>
                
                { User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                    <>
                      <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor="#009dff" px="12px" py="8px" borderRadius="50%" color="white" >{ User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
                      <button className='nav-btn nav-links' onClick={handleLogout}>Log Out</button>
                    </>  
                }
              </> : 
              <>
                <Link to='/' className='nav-item nav-logo'>
                < img src={logo} alt='logo' className='main-logo' style={{width:'90px'}}/>
                </Link>
                <NavLink to='/' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Home</NavLink>
                <NavLink to='/Questions' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Questions</NavLink>
                <NavLink to='/Tags' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Tags</NavLink>
                <NavLink to='/Users' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Users</NavLink>

                { User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Login</Link> :
                    <>
                      <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none', fontSize:'14px'}}><Avatar backgroundColor="#009dff" px="7px" py="2.5px" borderRadius="50%" color="white">{ User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
                      <button className='nav-btn nav-links' onClick={handleLogout}>LogOut</button>
                    </>  
                }
              </>
          }
         
        
        
        </div>
    </nav>
  )
}

export default Navbar;
