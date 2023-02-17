import React from 'react'
//import { useLocation } from 'react-router-dom'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import { useRef } from 'react'

const Users = () => {

  //const location = useLocation()

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className='home-container-1'>
      {
        windowSize.current[0] >= 500 ?
          <>
            <LeftSidebar />
          </> :
          <>
          </>
      }
      <div className="home-container-2" style={{marginTop: '30px'}}>
         <h1 style={{fontWeight:'400'}}>Users</h1>
        <UsersList /> 
      </div>
    </div>
  )
}

export default Users
