import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import { useRef } from 'react'
import '../../App.css'

const Home = () => {

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className='home-container-1'>
      {
        windowSize.current[0] >= 600 ?
          <>
            <LeftSidebar />
          </> :
          <>
          </>
      }
      
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home
