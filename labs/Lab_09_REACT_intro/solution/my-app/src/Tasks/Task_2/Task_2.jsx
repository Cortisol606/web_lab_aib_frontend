import React, { useState } from "react";
import PostItem from "./Task_2_Items";
import PostForm from "./Task_3";
const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: "Pudge", text: "купил МОМ", like: true },
    { id: 2, username: "Brisleback", text: "купил Refresher", like: false },
    { id: 3, username: "Slark", text: "мидасик", like: true },
    { id: 4, username: "Ursa", text: "T-34-85M", like: false },
  ]);

  const likePost = (postclick) => {
    if (postclick) {
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };

  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="postFlex">
      <div>
        <PostForm create={createPost} posts={posts} />
      </div>
      <div>
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            likes={likePost}
            remove={removePost}
          />
        ))}
      </div>
    </div>
  );
};
export default Post;
