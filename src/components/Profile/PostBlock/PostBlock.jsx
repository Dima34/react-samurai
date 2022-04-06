import PostList from "./PostList/PostList";
import s from "./PostBlock.module.css";
import React from "react";

const PostBlock = (p) => {
  
  let newPostTextarea = React.createRef()

  let addPost = () =>  {
  p.addPost()
  newPostTextarea.current.value=""
  p.updateNewPostText(newPostTextarea.current)
  }


  return (
  <section className={s.profilePosts}>
    <h2 className={s.title}>My posts</h2>

    <div className={s.postInputGroup}>
    <textarea
      placeholder="So... What u gonna write here today?..."
      name=""
      ref={newPostTextarea}
      onChange= {()=>{ 
      return p.updateNewPostText(newPostTextarea.current)
      }}
    ></textarea>
    <button onClick={()=>{addPost()}}>Post</button>
    </div>

    <PostList posts={p.posts} />
  </section>
  );
};

export default PostBlock;