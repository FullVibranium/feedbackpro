import {useContext} from 'react'
import FeedbackContext from './FeedbackContext.js/FeedbackContext'

import Feedbackitem from './Feedbackitem'

function FeedbackList({/*{feedback} PASSED IT AS A STATE , handleDelete*/ }) {
   const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length==0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
    <Feedbackitem key={item.id} item={item} /*handleDelete={handleDelete}*//>
      ))}
    </div>
  )
}

export default FeedbackList
