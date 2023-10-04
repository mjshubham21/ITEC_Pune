import { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // one more function
  // function multiply(){
  //console.log("Its rendering because of add button and minus as well")
  //     return add*10;
  // }

  const multiplication = useMemo(
    function multiply() {
      console.log("It's rendering because of Add button...");
      return add * 10;
    },
    [add]
  );

  return (
    <>
      <h2>UseMemo Hook</h2>
      <p>
        {" "}
        In our React app we have different functions in a file so some function
        get called unnecesarlily, application becomes slow so we have useMemo to
        stop calling those functions. lets take ex
      </p>
      {/* Function call here*/}
      {multiplication} <br />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
        className="submit mb"
      >
        {" "}
        Add
      </button>
      <span>{add} </span>
      <button
        onClick={() => {
          setMinus(minus - 1);
        }}
        className="submit mb"
      >
        {" "}
        Minus
      </button>
      <span>{minus} </span>
    </>
  );
};

export default UseMemo;
