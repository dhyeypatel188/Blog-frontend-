import { format, formatISO9075 } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../usercontext";
import { Link } from "react-router-dom";
function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userinfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://blog-l87h.onrender.com/post/${id}`).then((response) => {
      response.json().then((info) => {
        setPostInfo(info);
        // console.log(`here is cover:=> http:localhost:4000/${postInfo.cover}`);
      });
    });
  }, []);
  if (!postInfo) return <div>Fail to load</div>;

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by {postInfo.author.username}</div>
      {userinfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit Post
          </Link>
        </div>
      )}
      <div className="image">
        <img
          src={`https://blog-l87h.onrender.com/${postInfo.cover.replace(
            /\\/g,
            "/"
          )}`}
          alt=""
        />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
}

export default PostPage;
