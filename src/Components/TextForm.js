import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted To UpperCase","info");
  }
  // let newText = text.toUpperCase();
  // setText(newText); 
  const handleOnLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted To LowerCase","info");
  }
  const handleOntitleClick = () => {
    let text1 = document.querySelector("#mybox").value;
    let text = text1.split(" ");
    let index1 = text.map((text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    setText(index1.join(' '));
    props.showAlert("Converted To TitleCase","info");
  }
  const handleCleartext = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleard Text!","info");
  }
  const handleCopytext = () => {
    let text = document.querySelector('#textArea').value;
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied To Clipboard!","info");
    // let text = document.querySelector("#mybox");
    // text.select();
    // document.getSelection().removeAllRanges();
  }
  const handleReverseText = () => {
    let texts = document.querySelector("#mybox").value;
    let text = texts.split(' ')
      let text1 = text.map((text)=>text.split('').reverse().join(''));
    setText(text1.join(' '));
    props.showAlert("Converted Text To Reverse","info");
  }
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space","info");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  // let wordCount = text.trim() === '' ? 0 : text.split(" ").length;
  return (
    <>
      <div>
        <h2 className='mb-3' style={{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h2>
        <div className="container" style={{backgroundColor:props.mode === 'dark'?'dark':'primary'}}>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode==='dark'?'white':'black',border:'2px solid black'}} id="mybox" rows="8" autoFocus></textarea>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-3 mx-1`} onClick={handleOnUpperClick}>Click to Uppercase</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-3 mx-1`} onClick={handleOntitleClick}>Click to Titlecase</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-3 mx-1`} onClick={handleOnLowerClick}>Click to Lowercase</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-2 mx-1`} onClick={handleCopytext}>Copy text</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-2 mx-1`} onClick={handleReverseText}>Click to ReverseText</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-2 mx-1`} onClick={handleRemoveSpace}>Remove Spaces</button>
          <button disabled={text.length===0} className={`btn ${props.mode === 'primary'?'btn-warning':'btn-primary'} my-2 mx-1`} onClick={handleCleartext}>Clear text</button>
        </div>

        <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
          <h2 >Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} <b>Words</b> and {text.split("").filter((ele)=>{return ele.trim().length!==0}).length} <b>Characters</b></p>
          <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text.length !== 0?text:"Nothing To Preview!"}</p>
        </div>
      </div>
    </>
  )
}
