import React,{useState} from 'react'

// state is the one hook we have many hook
export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("on Change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    // text = "this is the new text"//this is the wrong way to set the text
    // setText("new Text");;//this is the correct way to set the state
    return (
        <>
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* whenever we want to listen the text we get the event in here we have onChange in that we have get the event and we set the text as event.target.value and the setText we get from the useState which is the hook which we import that is the State*/}
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>You text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.0008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
