import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const textToSpeech = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text to Speech has been started","success");
    }
    const textToSpeechPause = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.pause(msg);
        props.showAlert("Text to Speech has been paused","success");
    }
    const textToSpeechPlay = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.resume(msg);
        props.showAlert("Text to Speech has been resume","success");
    }
    const textToSpeechCancel = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.cancel(msg);
        props.showAlert("Text to Speech has been canceled","success");
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked");
        let newText ='';
        setText(newText)
        props.showAlert("Cleared all","success");
    }
    const copyText=() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }
    const handleOnExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange = (event) =>{
    //    console.log("On change!")
       setText(event.target.value)
    }
    const [text, setText] = useState("");
    // text = "new Text" --> wrong way to change the state
    // setText("new text");  --> correct way to change the state
  return (
      <>
    <div className="container" style={{color: props.mode===`dark`?`white`:`#042743`}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`light`,color: props.mode===`dark`?`white`:`#042743`}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary ms-2 mt-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary ms-2 mt-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary ms-2 mt-2" onClick={handleClearClick}>Clear all</button>
<button className="btn btn-primary ms-2 mt-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary ms-2 mt-2" onClick={textToSpeech}>Text to Speech</button>
<button className="btn btn-primary ms-2 mt-2" onClick={textToSpeechPause}>Pause Text to Speech</button>
<button className="btn btn-primary ms-2 mt-2" onClick={textToSpeechPlay}>Play Text to Speech</button>
<button className="btn btn-primary ms-2 mt-2" onClick={textToSpeechCancel}>Cancel Text to Speech</button>
<button className="btn btn-primary ms-2 mt-2" onClick={handleOnExtraSpace}>Remove all extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#042743`}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes away to read the contents.</p>
        <h2 className="m-auto">Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text-box to preview it here!"}</p>
        {/* <h2>After trimming</h2>
        <p>{text.length} characters</p> */}
    </div>
    </>
  )
}
