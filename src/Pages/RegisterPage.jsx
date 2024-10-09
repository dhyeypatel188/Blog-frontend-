import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();

    const response = await fetch("https://blog-l87h.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.status);
    if (response.status !== 200) {
      alert("registration failed");
    } else {
      alert("Success");
    }
  };

  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
