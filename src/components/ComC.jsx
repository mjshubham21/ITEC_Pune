import { useContext } from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  const fName1 = useContext(FirstName);
  const lName1 = useContext(LastName);
  return (
    <h2>
      {fName1} {lName1} Valar Dohaeris
    </h2>
  );
};

export default ComC;
