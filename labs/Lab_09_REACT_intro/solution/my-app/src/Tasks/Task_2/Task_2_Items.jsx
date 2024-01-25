import React, { useState } from "react";
import "./style.css";
const PostItem = (props) => {
  let like = props.post.like ? (
    <div className="red btn-click" onClick={() => props.likes(props.post)}>
      like post ♥
    </div>
  ) : (
    <div className="black btn-click" onClick={() => props.likes(props.post)}>
      dislike post
    </div>
  );
  return (
    <div className="post">
      <div>{props.post.id}</div>
      <div>{props.post.username}</div>
      <div>{props.post.text}</div>
      {like}
      <div className="red1" onClick={() => props.remove(props.post)}>
        удалить
      </div>
    </div>
  );
};
export default PostItem;
