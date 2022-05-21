import React, { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <input id="Input" placeholder="0" type="text" value={result}></input>

      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="Clear"
        className="button btn"
        onClick={() => {
          setResult("");
        }}
      />
      <input
        type="button"
        value="="
        className="button btn"
        onClick={calculate}
      />
    </div>
  );
}
