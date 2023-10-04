// import React from "react";
import ChangeColor from "./ChangeColor";
import One from "./One";
import Class_fun from "./Class_fun";
import Clock from "./Clock";
import Goal from "./Goal";
import PropsDrilling from "./PropDrilling";
import Reactform from "./Reactform";
import UseContext from "./UseContext.jsx";
import UseRef from "./UseRef";
import UseEffect from "./UseEffect";
import UseEffect2 from "./UseEffect2";
import HookCounter from "./HookCounter";
import { createContext } from "react";
import ComA from "./ComA";
import UseCallback from "./UseCallback";
import UseMemo from "./UseMemo";
import CountClick from "./CountClick";
import Hover from "./Hover";
import Binding from "./Binding";
import Bind2 from "./Bind2";
import Prop_Types from "./Prop_Types";

//useContext e.g
const FirstName = createContext();
const LastName = createContext();

const App = () => {
  const fName = "Valar";
  const lName = "Morghulis";
  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <FirstName.Provider value={fName}>
        <LastName.Provider value={lName}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>{" "}
      <hr />
      <h1>IEC Reactjs PUNE</h1> <hr />
      <One /> <hr />
      <ChangeColor /> <hr />
      <Class_fun /> <hr />
      <Clock /> <hr />
      <Goal isGoal={false} /> <hr />
      <PropsDrilling /> <hr />
      <Reactform /> <hr />
      <UseRef /> <UseContext /> <hr />
      <UseEffect name={"Valar"} /> <hr />
      <UseEffect2 /> <hr />
      <HookCounter /> <hr />
      <UseCallback /> <hr />
      <UseMemo /> <hr />
      <CountClick /> <hr />
      <Hover /> <hr />
      <Binding /> <hr />
      <Bind2 /> <hr />
      <Prop_Types name="MJ" age={24} />
    </div>
  );
};
// useCallback memoizes function defination between re-renders, useMemo memoizes the value.

export default App;
export { FirstName, LastName };
