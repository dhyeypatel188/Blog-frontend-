import { useState } from "react";

import "./App.css";
import Post from "./Components/Post";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { UserContext, UserProvider } from "./Usercontext";
import CreateNewPost from "./Pages/CreateNewPost";
import PostPage from "./Pages/PostPage";
import EditPost from "./Pages/EditPost";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreateNewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
