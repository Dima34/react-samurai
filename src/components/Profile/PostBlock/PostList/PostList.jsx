import PostItem from "./PostItem/PostItem"
import s from "./PostList.module.css"

const PostList = (p)=>{
    return (
      <ul className={s.postList}>
        {p.posts.map(el=>{
          return <PostItem text = {el.text} avatarUrl={el.avatarUrl} key={el.id} />
        })}
      </ul>
    )
}

export default PostList