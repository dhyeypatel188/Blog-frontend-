import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";
function Header() {
  const { setUserinfo, userinfo } = useContext(UserContext);
  useEffect(() => {
    fetch("https://blog-l87h.onrender.com/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userinfo) => {
        setUserinfo(userinfo);
      });
    });
  }, []);

  const username = userinfo?.username;
  const logout = () => {
    fetch("https://blog-l87h.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserinfo(null);
  };

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
