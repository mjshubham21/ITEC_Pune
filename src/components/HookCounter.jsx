import { useEffect, useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times Clicked`;
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("demo").style.color = "green";
    }, 3000);
  }, []);

  return (
    <>
      <h2 id="demo" style={{ color: "red" }}>
        TEXT COLOUR ABOUT TO CHANGE
      </h2>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
        className="submit mb"
      >
        Click to increment.
      </button>
    </>
  );
};

export default HookCounter;
