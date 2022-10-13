   import React, { useState } from 'react'
   
   
export default function Form(props) {
       
    

const handleUpClick =() =>{
    console.log("Uppercase was clicked");
    let newText =text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to UpperCase" ,"success");
}
const handleLoClick =() =>{
    console.log("Lower case was clicked " );
    let newText =text.toLowerCase()
    setText(newText);
    props.showAlert("Converted to Lowercase" ,"success");

}
const handleClearClick =()=>{
console.log("Clear Text Was Clear ");
let newText= '';
setText(newText);
props.showAlert("Clear " ,"success");
}

const handleOnChang =(event) =>{
    console.log("On Change");
    setText(event.target.value);
}
const [text, setText ]= useState(' ');


  return (

    <>
  <div className='container' style={{color : props.mode==='dark'?'white':'black'}} >
<h1>{props.heading}</h1>

<div className="mb-3">
  
  <textarea className="form-control" id="myBox" onChange={handleOnChang} value={text} style={{backgroundColor :props.mode==='dark'?'gray':'white', color : props.mode==='dark'?'white':'black'}} rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert To Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Case</button>

</div>

<div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} Words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length} Minutes read  </p>
    <h2>Privew</h2>
    <p>{text }</p>




</div>
</>   
  )
}
