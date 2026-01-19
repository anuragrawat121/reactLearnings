import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(""); // initial value is empty using read only variable

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setName(""); // setting the value empty after the submission
  };

  const inputHandler = (e) => {
    setName(e.target.value); //setting the value as user input
    console.log(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          onChange={(e) => {
            inputHandler(e);
          }}
          value={name} // changing as per the input
          type="text"
          placeholder="Enter your name"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
