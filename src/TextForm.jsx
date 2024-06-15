import React, { useState } from "react";

const TextForm = () => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(100);

  const repeatText = () => {
    let output = "";
    if (inputText === "") {
      alert("Please enter something.");
    } else {
      for (let i = 1; i <= inputNumber; i++) {
        output += i + ". " + inputText + "<br>";
      }
    }
    document.getElementById("output").innerHTML = output;
  };

  return (
    <form id="textForm">
      <label htmlFor="inputText">Enter Text: </label>
      <input
        type="text"
        id="inputText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        required
      />
      <br />
      <label htmlFor="inputNumber">Enter Number: </label>
      <input
        type="number"
        id="inputNumber"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value))}
        required
      />
      <br />
      <button type="button" onClick={repeatText}>
        Submit
      </button>
    </form>
  );
};

export default TextForm;
