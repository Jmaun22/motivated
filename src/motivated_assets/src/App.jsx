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
      <Button />
      <Form />
      <Modal />
      <Test />

     

 

       <Example onAdd={addTime}/> 
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            hours={noteItem.hours}
            minutes={noteItem.minutes}
            seconds={noteItem.seconds}
       
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
