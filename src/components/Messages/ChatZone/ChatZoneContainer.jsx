
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialog-reducer";
import ChatZone from "./ChatZone";

const mapStateToProps = (state)=>{
  return {
    messages : state.messages.messagesList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addMessageAction : ()=>{
      dispatch(addMessageActionCreator())
    },
    updateNewMessageText : (textarea) =>{
      dispatch(updateNewMessageTextActionCreator(textarea))
    } 
  }
}

const ChatZoneContainer = connect(mapStateToProps, mapDispatchToProps)(ChatZone)

export default ChatZoneContainer;
