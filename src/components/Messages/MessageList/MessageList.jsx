import s from "./MessageList.module.css";
import MessageListItem from "./MessageListItem/MessageListItem";


const MessageList = (p) => {
  return (
  <div className={s.messageList}>
    <h2>Dialogs</h2>
    <ul>
    {p.dialogList.map(el=><MessageListItem name={el.name} id={el.id} key={el.id}/>)}
    </ul>
  </div>
  );
};

export default MessageList;
