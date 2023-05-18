import "./App.css";
import { Message } from "./Message";
import { Clicker } from "./Clicker";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const onHandleClick = (direction) => {
    if (direction === "Up") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Message text="hello world!" />
      <Clicker onClicked={onHandleClick} resetCounter={resetCounter} />
      Counter: {counter}
    </div>
  );
}

export default App;
