import React, { useState } from "react";

export const Form = () => {
  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");

  function sub() {
    console.log(username);
    console.log(password);
  }
  function Uname(event) {
    let u = event.target.value;
    setUsername(u);
  }
  function Pass(event) {
    let p = event.target.value;
    setPassword(p);
  }

  return (
    <div>
      <p>UserName: {username}</p>
      <p>PassWord:{password}</p>
      userName:
      <input onChange={Uname} />
      password:
      <input type="password" onChange={Pass} />
      <button onClick={sub}>Submit</button>
    </div>
  );
};
