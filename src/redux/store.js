import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer"


let store = {
  _state: {
    profile:{
      postTextareaValue: "",
      postsData: [
        { text: "Write me if u wanna it", avatarUrl: "/img/avatar.jpg" },
        { text: "Do u wanna Beer? :)", avatarUrl: "/img/avatar.jpg" },
        { text: "Hi! My name is Dima, and that is my first post", avatarUrl: "/img/avatar.jpg" },
      ]
    },
    
    messages: {
      messageTextareaValue: "",
      messagesList:[
        {
          name: "Dima",
          avatarUrl: "/img/avatar.jpg",
          time: "9:00",
          message: "Hello, what`s up?",
        },
        {
          name: "Maks",
          avatarUrl: "/img/avatar.jpg",
          time: "9:10",
          message: "I`m feeling good",
        },
        {
          name: "Dima",
          avatarUrl: "/img/avatar.jpg",
          time: "9:13",
          message: "What`s your plans for tomorrow?",
        },
        {
          name: "Maks",
          avatarUrl: "/img/avatar.jpg",
          time: "9:17",
          message: "I wanna learn some React, and you?",
        },
        {
          name: "Dima",
          avatarUrl: "/img/avatar.jpg",
          time: "9:20",
          message: "I would make a 11ty app",
        }
      ],
      interlocutorData: [
        { name: "Dima", id: 1 },
        { name: "Maks", id: 2 },
        { name: "Andrew", id: 3 },
        { name: "Irina", id: 4 },
        { name: "Katerina", id: 5 },
        { name: "Dimych", id: 6 },
      ]  
    },
    
    users:[
      {
        name: "Dima",
        avatarUrl: "/img/avatar.jpg"
      },
      {
        name: "Sasha",
        avatarUrl: "/img/avatar.jpg"
      },
      {
        name: "Maks",
        avatarUrl: "/img/avatar.jpg"
      },
    ] 
  },

  getState(){
    return this._state
  },

  _callSubscriber(){
    console.log(`rerendered is empty`);
  },


  subscribe(observer){
    this._callSubscriber = observer
  },
  
  dispatch(action){ // { type: 'ADD-POST' }
    console.log(`dispatch called`);


    this._state.profile = profileReducer(this._state.profile, action)
    this._state.messages = dialogReducer(this._state.messages, action)

    this._callSubscriber()
  }  
}

export default store;
