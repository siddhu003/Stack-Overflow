import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Following = ({ userId }) => {

    // const id = userId;
    const users = useSelector((state) => state.usersReducer)

    const using = users.filter((user) => user._id === userId)[0]

  return (
      <div>
          <Link to={`/Users/${using._id}`}>
              <div className = "user-profile-links">
                    <h3>{using?.name.charAt(0).toUpperCase()}</h3>
                    <h5>{using?.name}</h5>
                </div>
          </Link>
          
    </div>
  )
}

export default Following
