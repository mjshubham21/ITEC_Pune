// useCallback memoizes function defination between re-renders, useMemo memoizes the value.
/*memoize the function useCallback vs memoize the value useMemo
    Referential equality for functions
    */
{
  /*One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.*/
}
import PropTypes from "prop-types";

import { useCallback, useEffect, useMemo, useState } from "react";

const UseCallback = () => {
  const [counter, setCounter] = useState(1);

  //useMemo Hook.
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const [name, setName] = useState("");

  const displayName = useCallback(() => {
    return name;
  }, [name]);

  return (
    <>
      {" "}
      <div className="form mb">
        <h2>UseCallback</h2>
        <h3>
          Factorial of {counter} is <span>{result} </span>{" "}
        </h3>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <hr /> <hr className="mb" /> <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* In this component, instead of passing name variable we need pass a function... */}
        <DisplayName displayName={displayName} />
        <br /> <br />
      </div>
    </>
  );
};

export default UseCallback;

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName()); //Variable in useContext acts as a function.
    console.log("Name component rendered...");
  }, [displayName]);
  return <p>{`My name is ${value}`} </p>;
};

//prop validation
DisplayName.propTypes = {
  displayName: PropTypes.func.isRequired,
};

//For useMemo
const factorial = (n) => {
  if (n < -1) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};
