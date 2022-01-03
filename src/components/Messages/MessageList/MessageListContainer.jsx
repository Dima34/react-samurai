import { connect } from "react-redux";
import MessageList from "./MessageList";

const mapStateToProps = (props) =>{
  return {
    dialogList : props.messages.interlocutorData
  }
}

const MessageListContainer = connect(mapStateToProps)(MessageList)


export default MessageListContainer;
