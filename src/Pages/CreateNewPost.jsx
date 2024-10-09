import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, NavLink } from "react-router-dom";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
function CreateNewPost() {
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const createnewpost = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summery", summery);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const respose = await fetch("https://blog-l87h.onrender.com/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (respose.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form onSubmit={createnewpost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="summery"
          placeholder={"Summery"}
          value={summery}
          onChange={(e) => {
            setSummery(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            setFiles(e.target.files);
          }}
        />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(e) => {
            setContent(e);
          }}
        />
        <button style={{ marginTop: "5px" }}>Create Post</button>
      </form>
    </>
  );
}

export default CreateNewPost;
