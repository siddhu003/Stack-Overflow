import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useRef } from 'react'

const Questions = ({ question }) => {
  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div className='display-question-container'>

      
        {
          windowSize.current[0] >= 500 ?
            <>
              <div className='display-votes-ans'>
                <p>{question.upVote.length - question.downVote.length}</p>
                <p>votes</p>
              </div>
              <div className='display-votes-ans'>
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
              </div>
            </> :
            <>
            <div className="display-votesandans">
              <p>{question.upVote.length - question.downVote.length} votes</p>
              <p>{question.noOfAnswers} answers</p>
            </div>
            </>
        }

        

      <div className='display-question-details'>
        <Link to={`/Questions/${(question._id)}`} className='question-title-link'>{question.questionTitle}</Link>
        <div className='display-tags-time'>
          <div className='display-tags'>
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <p className='display-time'>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Questions
