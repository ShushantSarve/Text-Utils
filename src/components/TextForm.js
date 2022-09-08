import React, { useState } from 'react'


const TextForm = (props) => {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("text cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); 
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChnage = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className='textForm' style={{color: props.mode === 'light'?'black': 'white'}}>

            <h2 className='my-2'>{props.heading}</h2>

            <form>    
                <div className="mb- 3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'?'white': 'grey', color: props.mode === 'light'?'black': 'white'}} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
                </div>
            </form>

            <button disabled={text.length === 0} className="btn btn-primary btn-sm my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary btn-sm my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button> 
            <button disabled={text.length === 0} className="btn btn-primary btn-sm my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary btn-sm my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary btn-sm my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

        </div>
 
        <div className="container my-3" style={{color: props.mode === 'light'?'#042743': 'white'}}> 
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length != 0}).length} words and {text.length} characters</p>
            <p>{text.split(" ").filter((element) => {return element.length != 0}).length * 0.008} minutes read</p>
        </div>

        </>
    )
}

export default TextForm;