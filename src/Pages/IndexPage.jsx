import React, { useEffect, useState } from "react";
import Post from "../Components/Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://blog-l87h.onrender.com/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post {...post} />;
        })}
    </div>
  );
}

export default IndexPage;
