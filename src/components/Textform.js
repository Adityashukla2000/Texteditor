import React,{useState} from 'react'

export default function Textform (props){

   const handlerUpCase=()=>{
    const newText = text.toUpperCase(); 
    setText(newText);
   }

   const handlerLowerCase=()=>{
    const newText = text.toLowerCase(); 
    setText(newText);
   }

   const handlerRemoveSpace=()=>{
    const newText = text.replace(/\s+/g, ' ').trim(); 
    setText(newText);
   }

   const handlerRestore=()=>{
    const newText = ''; 
    setText(newText);
   }


   const textHandler =(e)=>{
    setText(e.target.value);
   }

   const [text,setText] = useState('');
   return ( 
    
    <>
  <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control my-3" id="textform" value={text} onChange={textHandler} rows="8"></textarea>
  </div>
  <div className="container">
  <button className="btn btn-primary" onClick={handlerUpCase}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handlerLowerCase}>Convert to Lowercase</button>
  <button className="btn btn-primary" onClick={handlerRemoveSpace}>Remove Extra Space</button>
  <button className="btn btn-primary mx-2" onClick={handlerRestore}>Restore</button>
  </div>
  <div className="extratext my-2 mx-1">
  <h2>
    Summary of text :
  </h2>
    <p>Total Words {text.split(" ").length} and Character {text.length}</p>
    <p>{0.008*text.split(" ").length} time to read</p>

    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  
  </>
    )
}
