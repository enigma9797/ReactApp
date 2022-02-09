import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    const updateText = text.toUpperCase();
    setText(updateText);
  };

  const lowerCase = () => {
    const updateText = text.toLowerCase();
    setText(updateText);
  };
  const cleartext = () => {
    setText("");
  };

  const updateText = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(props.textArea);

  return (
    <>
      <div style={{color : props.mode === "light" ? "black" : "white"}} className="container">
        <div className="mb-3">
          <h1 >{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black", color : props.mode === "light" ? "black" : "white"
            }}
            onChange={updateText}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          LowerCase Go
        </button>
        <button className="btn btn-danger mx-2" onClick={cleartext}>
          Clear To
        </button>
      </div>
      ;
      <div style={{color : props.mode === "light" ? "black" : "white"}}  className="container my-2">
        <div className="mb-3">
          <h2>Text Preview</h2>

          <p>{text ? text : "...preview will be shown here"} </p>
          <p>
            {text.trim().split(" ")[0] !== ""
              ? text.trim().split(" ").length
              : "0"}{" "}
            words and {text.trim().length} characters
          </p>
        </div>
      </div>
      ;
    </>
  );
}
