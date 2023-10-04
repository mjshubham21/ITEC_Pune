//Theme toggle Assignment:

import { useRef, useState } from "react";

const UseRef = () => {
  //Creating a ref:
  const ref1 = useRef();

  //Theme Mode:
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    const Style = ref1.current.style;
    if (newMode === "light") {
      Style.backgroundColor = "white";
      Style.color = "black";
      Style.border = "1px solid black";
    } else {
      Style.backgroundColor = "black";
      Style.color = "white";
    }

    //common styles:
    Style.padding = "1rem";
    Style.width = "150px";
    Style.height = "150px";
    Style.margin = "1rem auto";
    Style.borderRadius = "10px";
    Style.textAlign = "center";
  };

  return (
    <>
      <hr />
      {/* Assignment: implement toggle for dark mode */}
      <h1>useRef Hook</h1>
      <button className="submit" onClick={handleClick}>
        {mode === "light" ? "Dark" : "Light"} Mode
      </button>

      <br />

      <h2 className="mb" ref={ref1}>
        Content for useRef
      </h2>
    </>
  );
};

export default UseRef;
