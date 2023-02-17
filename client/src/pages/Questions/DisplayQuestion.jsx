import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
import { useRef } from 'react'
//import '../../components/HomeMainbar/HomeMainbar.css'
const DisplayQuestion = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className='home-container-1'>
      {
        windowSize.current[0] >= 500 ?
          <>
            <LeftSidebar />
            <div className='home-container-2'>
            <QuestionDetails />
            <RightSidebar/>
            </div>
          </> :
          <>
            <div className='home-container-2'>
              <QuestionDetails />
            </div>
          </>
      }
      
    </div>
  )
}

export default DisplayQuestion
