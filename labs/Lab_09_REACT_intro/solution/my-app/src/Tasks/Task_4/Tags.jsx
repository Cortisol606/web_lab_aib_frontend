import React, { useContext } from "react";
import "./style.css";
import { Context } from "./context";

const PostTags = (props) => {
  const { sortTags } = useContext(Context);
  console.log(props.tags.isActive);
  let tag = props.tags.isActive ? (
    <div className="red" onClick={() => sortTags(props.tags)}>
      {props.tags.tag}
    </div>
  ) : (
    <div className="black " onClick={() => sortTags(props.tags)}>
      {props.tags.tag}
    </div>
  );
  return <div>{tag}</div>;
};
export default PostTags;
