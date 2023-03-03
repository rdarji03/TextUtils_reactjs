import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");

  function ToUpperCase() {
    let newtext = text.toUpperCase();
    settext(newtext);
    // let nt=document.querySelector(".inpvalue")
    // let up=nt.value.toUpperCase()
    // settext(up)
  }
 
  function handleonchange(event) {
    settext(event.target.value);    
  }
  function ToLowerCase(){
    let lower=text.toLowerCase()
    settext(lower)
  }
  function cleartext(){
    settext("")
  }
  const speak = () => {
    let voices = window.speechSynthesis.getVoices()
    let msg = new SpeechSynthesisUtterance();
    msg.lang = 'en-US';
    msg.voice=voices[10]
    
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  return (
    <>
      <div className="container my-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <h1 style={{color:`${props.textclr}`}} >Enter Text To Analyze</h1>
          <Form.Control
            as="textarea"
            rows={10}
            value={text}
            onChange={handleonchange}

            className="inpvalue"
          />
        </Form.Group>
        <Button variant={`${props.btnmode}`} onClick={ToUpperCase}>
          Convert To Uppercase
        </Button>{" "}
        <Button variant={`${props.btnmode}`} onClick={ToLowerCase}>
          Convert To Lowercase
        </Button>{" "}
        <Button variant={`${props.btnmode}`} onClick={cleartext}>
          Clear All
        </Button>{" "}
        <Button variant={`${props.btnmode}`} onClick={speak}>
          Speak
        </Button>{" "}
        <Button variant={`${props.btnmode}`} onClick={speak}>
          Copy Text
        </Button>{" "}
      </div>
      <div className="container">
      <p style={{color:`${props.textclr}`}}>Number Of characters: {text.length} </p>
      <p style={{color:`${props.textclr}`}}>Number of words:{text.split(" ").filter((element)=>{return element.length!==0}).length}</p>       
       </div>
    </>
  );
}
