import React from "react";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let submitdetails = async (e) => {
    e.preventDefault(); //--stops page relod
    //send details to backend
    let data = { email, password };
    let result = await fetch(
      "https://e-comm-backend-1-qpo6.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let finalresult = await result.json();

    alert(`${finalresult.msg}`);
  };
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={submitdetails}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setemail(e.targetvalue);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setpassword(e.targetvalue);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
