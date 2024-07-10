import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase!","success");
        
    }

    const handleLoClick = ()=>{
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Convert to lowercase!","success");
       
   }

   const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear!","success");
}
   const alternateOnClick = ()=>{
    let newText = text.flipCase();
    setText(newText)
}

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
        
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1 className='my-3'>{props.heading}</h1> 
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' }} id="mybox" rows="8"></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={alternateOnClick}>aLtErNaTe cAsE</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}


