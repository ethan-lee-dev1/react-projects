import React from "react";

export const Clicker = ({ onClicked, resetCounter }) => {
  return (
    <div>
      <button onClick={() => onClicked("Up")}>Up</button>
      <button onClick={() => onClicked("Down")}>Down</button>
      <div>
        <button onClick={() => resetCounter()}>Reset</button>
      </div>
    </div>
  );
};
