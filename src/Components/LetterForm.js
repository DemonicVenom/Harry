import React, {useState} from 'react'


export default function LetterForm(props) {
    const handleUpClick =()=>{
      let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }

    const handleClearClick =()=>{
      let newText ='';
      setText(newText)
    }

    const handleAlClick =()=>{
      let newText = text
    }
    const handleOnChange =(event)=>{
      console.log("On change");
      setText(event.target.value)
   }
    const [text, setText] = useState('Enter text here');
    
  return (
    <div>
      <div className="container">
        <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button> 
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-1 my-2" onclick={handleAlClick}>aLtErNaTe cAsE</button>
</div>
<div className="container my-3">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length}words and {text.length} Characters</p>
  <p> {0.008*text.split(" ").length}Minutes reads</p>
  </div>
  <div className="container">
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</div>

  )
}


