import s from "./PostItem.module.css";

const PostItem = (p) => {
  return (
  <li className={s.post}>
    <img className={s.postAvatar} src={p.avatarUrl} alt="post avatar" />
    <p className={s.postText}>{p.text}</p>
  </li>
  );
};

export default PostItem;
