import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);
  function handleClick() {
    setIsOn(!isOn);
  }
  return <button style={{ color: isOn ? "red" : "green" }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
