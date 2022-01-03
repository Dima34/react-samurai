import ChatZoneContainer from "./ChatZone/ChatZoneContainer";
import MessageListContainer from "./MessageList/MessageListContainer";
import s from "./Messages.module.css";


const Messages = (p) => {
  return (
    <section>
      <div className={s.messageContainer}>
        <MessageListContainer />

        <ChatZoneContainer/>
      </div>
    </section>
  );
};

export default Messages;
