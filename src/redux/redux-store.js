import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers(
  {
    profile : profileReducer,
    messages : dialogsReducer,
    users : userReducer
  }
)

let store = createStore(reducers);

export default store;