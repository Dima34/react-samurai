import React, { createRef } from "react";
import s from "./ChatZone.module.css";
import Message from "./Message/Message";
import MessagesHeader from "./MessagesHeader/MessagesHeader";


const ChatZone = (p) => {
  let textarea = React.createRef();

  const addMessage = () => {
  p.addMessageAction();
  textarea.current.value = '';
  p.updateNewMessageText(textarea.current)
  
  }

  return (
  <div className={s.chat}>
    <div className={s.messageZone}>
    <MessagesHeader />

    <ul className={s.messages}>
      {
      p.messages.map(el=><Message
        key={el.id}
        name={el.name}
        avatarUrl={el.avatarUrl}
        time={el.time}
        message={el.message}
      />)
      }
    </ul>
    </div>

    <div className={s.respondZone}>
    <textarea name="" ref={textarea} onChange={()=>{ p.updateNewMessageText(textarea.current)}} placeholder="What u gonna say?.."></textarea>
    <button onClick={()=>{addMessage()}}>Send</button>
    </div>
  </div>
  );
};

export default ChatZone;
