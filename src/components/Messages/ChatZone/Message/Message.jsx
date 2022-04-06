import s from "./Message.module.css";

// name, avatar url, time, message
const Message = (p) => {
  return (
  <li className={s.message}>
    <img
    // "./img/avatar.jpg"
    src={p.avatarUrl}
    alt={`${p.name}\`s thumbnail`}
    className={s.messageAvatar}
    />

    <div className={s.messageContent}>
    <div className={s.messageHeader}>
      <h3 className={s.messageInterlocutorName}>{p.name}</h3>
      <time className={s.messageTime}>{p.time}</time>
    </div>
    <p className={s.messageText}>{p.message}</p>
    </div>
  </li>
  );
};

export default Message;
