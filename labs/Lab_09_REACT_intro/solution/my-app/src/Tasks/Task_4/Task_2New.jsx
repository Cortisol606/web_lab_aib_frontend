import React, { useState, useContext, useEffect } from "react";
import PostItem from "./Task_2_ItemsNew.jsx";
import PostForm from "./Task_3New.jsx";
import { Context } from "./context.jsx";
import PostTags from "./Tags.jsx";
const PostFour = () => {
  const [sortedPosts, setSortedPosts] = useState([{}]);
  const [posts, setPosts] = useState([
    { id: 1, username: "User", text: "text", tag: "#music", like: true },
    { id: 2, username: "User1", text: "text1", tag: "#music", like: false },
    { id: 3, username: "User2", text: "text2", tag: "#music", like: true },
    { id: 4, username: "User3", text: "text3", tag: "#music", like: false },
  ]);
  const [tags, setTags] = useState([{ tag: "", isActive: false }]);
  useEffect(() => {
    const newTags = posts.reduce((uniqueTags, item) => {
      const tagExists = uniqueTags.some((tagObj) => tagObj.tag === item.tag);
      if (!tagExists) {
        return [...uniqueTags, { tag: item.tag, isActive: false }];
      }
      return uniqueTags;
    }, []);
    setTags(newTags);
    setSortedPosts(posts);
  }, [posts]);
  console.log(tags);
  const likePost = (postclick) => {
    if (postclick) {
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };
  const sortTags = (clickedTag) => {
    const updatedTags = tags.map((tag) => {
      if (tag.tag === clickedTag.tag) {
        return { ...tag, isActive: !tag.isActive };
      } else {
        return { ...tag, isActive: false };
      }
      return tag;
    });
    setTags(updatedTags);

    const filteredPosts = posts.filter((post) => post.tag === clickedTag.tag);
    setSortedPosts(filteredPosts);
  };
  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <Context.Provider
      value={{
        removePost,
        createPost,
        sortTags,
      }}
    >
      <div className="postFlex">
        <div>
          <PostForm create={createPost} posts={posts} />
        </div>
        <div>
          Тэги
          {tags.map((item) => (
            <PostTags tags={item} />
          ))}
          {sortedPosts.map((post) => (
            <PostItem
              post={post}
              key={post.id}
              likes={likePost}
              remove={removePost}
            />
          ))}
        </div>
      </div>
    </Context.Provider>
  );
};
export default PostFour;
