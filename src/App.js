import { useState } from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Abouticon from "./Components/Abouticon";
import { FeedbackProvider } from "./Components/FeedbackContext.js/FeedbackContext";

import FeedbackForm from "./Components/FeedbackForm";
import Feedbackitem from "./Components/Feedbackitem";
import FeedbackList from "./Components/FeedbackList";
import Feedbackstats from "./Components/Feedbackstats";
import Header from "./Components/Header";
import About from "./Components/pages/About";
import FeedbackData from "./data/FeedbackData";

function App() {
  // const [feedback , setFeedback] = useState(FeedbackData)
  // const addFeedback = (newFeedback)=>{
  //   newFeedback.id = uuidv4()
  //   setFeedback([newFeedback , ...feedback]);

  // }
  // const deleteitem = (id)=>{
  //   if(window.confirm('Are you sure ?')){
  //     setFeedback(feedback.filter((item)=> item.id!== id));
  //   }
    
  // }

  return (
  
 
<FeedbackProvider>
    <Router>
     <Header />
       <Routes>
     <Route exact path="/" element={
       <>
       <FeedbackForm /*handleAdd={addFeedback}*//>
     <div className="container">
     <Feedbackstats /*feedback={feedback}*/ />
    <FeedbackList /* handleDelete = {deleteitem} feedback={feedback} USED IT AS PROP BEFORE*//>
     </div>
       </>
     }>
     
     </Route>
  
     <Route path="/about" element={<About />} />
       </Routes>
      <Abouticon />
     </Router>
     </FeedbackProvider>
    
  
     
    
   
  );
}

export default App;
