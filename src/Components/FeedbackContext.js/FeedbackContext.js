import { createContext , useState } from "react";
import { v4 as uuidv4} from 'uuid';
const FeedbackContext = createContext()
export const FeedbackProvider = ({children})=> {
  const [feedback , setFeedback] = useState([
      {
       id: 1 , 
       text: 'This is used for context',
       rating: 10,
      },
      {
       id: 2 , 
       text: 'This is used for context',
       rating: 9,
      },
      {
       id: 3 , 
       text: 'This is used for context',
       rating: 8,
      }
  ])
  const[edit , setEdit] = useState({
    item:{},
    edit: false
  })
  const deleteitem = (id)=>{
    if(window.confirm('Are you sure ?')){
      setFeedback(feedback.filter((item)=> item.id!== id));
    }
    
  }
  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback , ...feedback]);

  }
  const updateItem = (id,upItem)=>{
    setFeedback(feedback.map((item)=> item.id === id?{...item, ...upItem} : item))
  }
  const editItem = (item)=>{
    setEdit({
      item,
      edit: true
    })

  
  }
  return (
  <FeedbackContext.Provider 
  value={{
    feedback,
    edit,
    deleteitem, 
    addFeedback,
    editItem,
    updateItem,
  }}
  >
      {children} 
  </ FeedbackContext.Provider>
  )
}

export  default FeedbackContext