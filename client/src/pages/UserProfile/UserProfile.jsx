import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import cake from '../../assets/birthday-cake.svg'
import pen from '../../assets/pen.svg'
import moment from 'moment'
import { useState } from 'react'
import { EditProfileForm } from './EditProfileForm'
import { ProfileBio } from './ProfileBio'
import { useRef } from 'react'
import './UsersProfile.css'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    console.log(currentProfile)
    // console.log(currentUser)

    const [Switch, setSwitch] = useState(false)

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
          
          <div className="home-container-2">
              <section>
                  <div className="user-details-conatiner">
                      <div className='user-details'>
                          {
                            windowSize.current[0] >= 500 ? 
                                <>
                                    <Avatar backgroundColor='purple' color='white' fontSize='50px' px='40px' py='25px'>
                                        {currentProfile?.name.charAt(0).toUpperCase()}
                                      </Avatar>
                                      
                                    <div className="user-name">
                                        <h1>{currentProfile.name}</h1>
                                        <p><img src={cake} alt='cake' width='18px' />  Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                    </div>
                                </> :
                                <>
                                    <Avatar backgroundColor='purple' color='white' fontSize='30px' px='25px' py='15px'>
                                        {currentProfile?.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                      
                                    <div className="user-name">
                                        <h1>{currentProfile.name}</h1>
                                        <p><img src={cake} alt='cake' width='12px' />  Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                    </div>
                                </>
                          }
                          
                      </div>

                      {
                        windowSize.current[0] >= 500 ? 
                            <>
                                {
                                    currentUser?.result._id === id && (
                                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                            <img src={pen} alt='pen' width='18px' />Edit Profile
                                        </button>
                                    )
                                }
                            </> :
                            <>
                                {
                                    currentUser?.result._id === id && (
                                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                            <img src={pen} alt='pen' width='12px' />Edit Profile
                                        </button>
                                    )
                                }
                            </>
                    }

                      
                  </div>
                  <>
                      {
                          Switch ? (
                              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                          ) : (
                                <ProfileBio currentProfile={currentProfile} />
                          )
                      }
                  </>
              </section>
          </div>
      </div> 
  )
}

export default UserProfile
