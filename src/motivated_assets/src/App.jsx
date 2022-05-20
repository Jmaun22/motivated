import React, { useState } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Note from "./componets/Note";
import Test from "./componets/timer/test"

import Timer from "./componets/timer/timer"
import Example from "./componets/timer/modal"
import {Button, Form, Modal} from 'react-bootstrap';



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [notes, setNotes] = useState([]);

  function addTime(time) {
 
    setNotes(prevNotes => {
      return [...prevNotes, time];
    });

  }
  return (
    <div>
      <Header />
     
      
  
<div >
  <Example onAdd={addTime}  /> 
  </div>

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            goal={noteItem.goal}
            hours={noteItem.hours}
           
       
          />
        );
      })}

      {notes.map((noteItem, index) => {
        return (
          <Timer
            key={index}
            id={index}
            hours={noteItem.hours}
            minutes={noteItem.minutes}
            seconds={noteItem.seconds}
       
          />
        );
      })} 
    
      <Footer />
    </div>
  );
}

export default App;
