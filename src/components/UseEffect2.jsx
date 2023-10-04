import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); //Assignment: Usages of React useEffect hook.
  return (
    <>
      <h2>Rendered {count} times</h2>
    </>
  );
};

export default UseEffect2;
