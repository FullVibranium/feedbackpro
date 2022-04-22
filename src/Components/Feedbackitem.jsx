import Card from "./shared/Card"
import {useContext} from 'react'
import  {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from "./FeedbackContext.js/FeedbackContext"

function Feedbackitem({item /*,handleDelete*/}) {
    const{deleteitem, editItem} =useContext(FeedbackContext)
  return (
 
  <Card >
  <div className="num-display">
          {item.rating} </div>
          <button className="close" onClick={()=>deleteitem(item.id)}><FaTimes color="purple" /></button>
          <button className="edit" onClick={()=> editItem(item)}><FaEdit color="purple"/></button>
          <div className="text-display">
              {item.text}
          </div>
  </Card>
  
         
 
    
    
  
  )
}

export default Feedbackitem
