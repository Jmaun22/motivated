import React, { useState } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Note from "./componets/Note";
import Test from "./componets/timer/test"

import Timer from "./componets/timer/timer"
import Example from "./componets/timer/modal"
import {Button, Form, Modal} from 'react-bootstrap';

import TestTimer from "./componets/timer/testTimer"



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

     
      
  

  <Example onAdd={addTime}  /> 

  {notes.map((noteItem, index) => {
        return (
          
          <TestTimer
            key={index}
            id={index}
     
            seconds={noteItem.seconds}
            minutes={noteItem.minutes}
            hours={noteItem.hours}

       
       
            
            />
        );
      })}


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


    
      <Footer />
    </div>
  );
}

export default App;
