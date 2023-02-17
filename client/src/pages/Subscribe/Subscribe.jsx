import React from 'react'
import './Subscribe.css'
import './Plans'
import Plans from './Plans'
import { useSelector } from 'react-redux'

const Subscribe = () => {

    const User = useSelector((state) => (state.currentUserReducer))

    const array = [
        {
            title: "Free",
            cost: 'Free',
            description: 'Limited to post single question per day',
            link:" https://stack-overflow-clone-siddharth.netlify.app/"
        }, {
            title: 'Silver',
            cost: '₹100',
            description: "Max 5 Questions can be posted a day",
            link: "https://buy.stripe.com/test_8wM2aP20l9jcdt66op"
        },
        {
            title: 'Gold',
            cost: '₹1000',
            description: "No to limit for posting questions",
            link: "https://buy.stripe.com/test_aEUeXB34pfHA0Gk002"
        }
    ]
    const arrayElement = array.map(x => {
        return <Plans {...x}/>
    })

    return (
        <div className='home-1'>
            <div className="existingPlan">
                {
                    User?.result?.accountType === 'Free' ? <p>You are currently on free plan</p> :
                        <p>You are currently on {User?.result?.accountType} plan</p>
                }
            </div>
          <div className="details">
            <h1>Stack Overflow for</h1> <h1>Teams Pricing and Plans </h1> 
            <p> We have a plan to fit the knowledge management</p> <p>and collaboration needs of your team. </p>
            <button className='compare-btn'>Compare Plans</button><br />
          </div>
          
          <div className='all-plans'>
              {arrayElement}
          </div>
          
    </div>
  )
}

export default Subscribe
