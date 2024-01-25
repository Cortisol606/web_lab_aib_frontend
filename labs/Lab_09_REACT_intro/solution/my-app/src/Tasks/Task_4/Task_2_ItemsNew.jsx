import React, { useState, useContext } from "react";
import "./style.css";
import { Context } from "./context.jsx";
const PostItemFour = (props) => {
  let like = props.post.like ? (
    <div className="red btn-click" onClick={() => props.likes(props.post)}>
      like post
    </div>
  ) : (
    <div className="black btn-click" onClick={() => props.likes(props.post)}>
      like post
    </div>
  );
  const { removePost } = useContext(Context);
  return (
    <div className="post">
      <div>{props.post.tag}</div>
      <div>{props.post.username}</div>
      <div>{props.post.text}</div>
      {like}
      <div className="red1" onClick={() => removePost(props.post)}>
        удалить
      </div>
    </div>
  );
};
export default PostItemFour;
