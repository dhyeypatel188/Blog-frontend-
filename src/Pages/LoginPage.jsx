import React, { useContext } from "react";
import { useState } from "react";
import IndexPage from "./IndexPage";
import { Navigate } from "react-router-dom";
import { UserContext } from "../usercontext";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserinfo } = useContext(UserContext);
  const Login = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blog-l87h.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    // console.log(response.json());
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserinfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form className="login">
        <h1>Login</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={Login}> Login</button>
      </form>
    </>
  );
}

export default LoginPage;
