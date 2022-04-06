import s from "./MessagesHeader.module.css";

const MessagesHeader = () => {
  return (
  <div className={s.messagesHeader}>
    <img src="./img/post-avatar.png" alt="Andrew`s avatar" />
    <p>Andew Matviychuk</p>
  </div>
  );
};

export default MessagesHeader;
