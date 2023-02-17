import React from 'react'
import './Subscribe.css'
import question from '../../assets/question-plan.svg'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentPlan } from '../../actions/users'

const Plans = (props) => {

  const User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch()

  const handleSubmit = (selectedTitle) => {
    dispatch(updateCurrentPlan(User?.result?._id, selectedTitle))
  }

  return (
    <div className='plan'>
        <div className='plan-top'>
            <h6 className='label'>{props.title}</h6>      
              <h2>{props.cost}</h2>
              < >
                  {
                      props.cost === 'Free' ? <p className='muted'>No credit card required</p> : <p className='muted'>per month</p>
                  }
              </>
              <hr></hr>
              <p className='pin'><img src={question} alt='question' width='18px' style={{paddingRight:'5px'}} />{props.description}</p>
          </div>
          <div className='plan-bottom'>
              
              <button className='btn' onClick={ () => handleSubmit(props.title)}><h4><a href={props.link}>Pay Now</a></h4></button>

            </div>
    </div>
  )
}

export default Plans