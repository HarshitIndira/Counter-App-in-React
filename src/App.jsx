import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  let increaseCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  let decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
      <br />
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  );
}

export default App;
