import React from "react";
import { formatISO9075, format } from "date-fns";
import { Link } from "react-router-dom";
function Post({ title, summery, cover, content, createdAt, author, _id }) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <img src={"https://blog-l87h.onrender.com/" + cover} alt="" />
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")} </time>
        </p>
        <p className="summery">{summery}</p>
      </div>
    </div>
  );
}

export default Post;
