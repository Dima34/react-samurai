import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import PostBlock from "./PostBlock";

let mapStateToProps = (state)=>{
  return {
  posts : state.profile.postsData
  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
  updateNewPostText : (textarea) => {
    dispatch(updateNewPostTextActionCreator(textarea))
  },
  addPost : () => {
    dispatch(addPostActionCreator())
  }
  }  
}

const PostBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostBlock)

export default PostBlockContainer;