// import React from "react";

// class Class_fun extends React.Counter{
//     constructor(props)
//     {
//         super(props)
//         this.state = {
//             counter : 0
//         }
//     }

//         render(){
//             return(
//                 <>
//                     <h1>I have Clicked {this.state.counter} times</h1>
//                     <button onClick={()=>this.setState({counter: this.state.counter+1})}>Click Me</button>
//                 </>
//             )
//         }

// }

import React, { useState } from "react";

// function component using useState hooks
function Class_fun() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>I have Clicked {counter} times</h1>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default Class_fun;
