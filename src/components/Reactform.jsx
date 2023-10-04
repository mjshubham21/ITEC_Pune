import { useState } from "react";
// import React from "react";

export default function Reactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myCar, setMyCar] = useState("");

  const handleChangeSelect = (event) => {
    //event.preaventDeafault() we will not
    setMyCar(event.target.value);
  };
  const handelemail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDeafalut();
    if (email.length === 0) {
      alert("email id can't be empty");
      return;
    }
    if (password.length < 8) {
      alert("password cant be less than 8 chars");
      return;
    }
    alert(`you succefully register ${name}`);
    //suggeted
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form className="form" onSubmit={handelSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Enter emailId</label>
        <input type="text" value={email} onChange={handelemail} />
        <label>Enter Password</label>
        <input type="text" value={password} onChange={handlePassword} />

        <select value={myCar} onChange={handleChangeSelect}>
          <option value="Ford">Ford</option>
          <option value="nexon">nexon</option>
          <option value="hexa">Hexa</option>
        </select>

        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

// export default Reactform;
