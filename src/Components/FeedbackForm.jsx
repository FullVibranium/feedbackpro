import {useState,useContext,useEffect} from 'react'
import FeedbackContext from './FeedbackContext.js/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'

function FeedbackForm(/*{handleAdd}*/) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnD, setBtnD] = useState(true)
    const [msg, setMsg] = useState('')

    const{addFeedback , edit, updateItem}=useContext(FeedbackContext)
    useEffect(()=>{
        if(edit.edit == true){
            setBtnD(false)
            setText(edit.item.text)
            setRating(edit.item.rating)
        }
    },[edit])
    const handleChange = (e)=>{
       if(text === ''){
           setBtnD(true)
           setMsg(null)
       }else if(text !=='' && text.trim().length <=10){
           setMsg('Text must have atleast 10 characters')
           setBtnD(true)
       }else{
           setMsg(null)
           setBtnD(false)
       }
        setText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
            text ,
            rating ,
            }
            if(edit.edit === true){
                updateItem(edit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback);
            }
            
            setText('')
        }
    }
  return (
    <div>
        <Card>
          <form onSubmit={handleSubmit}>
              <h2>Plese write your review!</h2>
              <RatingSelect select={(rating) => setRating(rating)}/>
              <div className="input-group">
                  <input type="text" placeholder='Write a a Review' onChange={handleChange} value={text}/>
                  <Button type='submit'  isDisabled={btnD}>Send</Button>
              </div>
              {msg && <div className='message'>{msg}</div>}
          </form>
        </Card>
      
    </div>
  )
}

export default FeedbackForm
