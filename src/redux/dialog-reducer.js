const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_AREA_VALUE = "CHANGE-MESSAGE-AREA-VALUE"


let initialState = {
  messageTextareaValue: "",
  messagesList:[
    {
      name: "Dima",
      avatarUrl: "/img/avatar.jpg",
      time: "9:00",
      message: "Hello, what`s up?",
      id: "1"
    },
    {
      name: "Maks",
      avatarUrl: "/img/avatar.jpg",
      time: "9:10",
      message: "I`m feeling good",
      id: "2"
    },
    {
      name: "Dima",
      avatarUrl: "/img/avatar.jpg",
      time: "9:13",
      message: "What`s your plans for tomorrow?",
      id: "3"
    },
    {
      name: "Maks",
      avatarUrl: "/img/avatar.jpg",
      time: "9:17",
      message: "I wanna learn some React, and you?",
      id: "4"
    },
    {
      name: "Dima",
      avatarUrl: "/img/avatar.jpg",
      time: "9:20",
      message: "I would make a 11ty app",
      id: "5"
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
}

const dialogReducer = (state = initialState, action) =>{
  let stateCopy
  
  switch(action.type){
    case CHANGE_MESSAGE_AREA_VALUE : 
      stateCopy = {...state}
      stateCopy.messageTextareaValue = action.textarea.value;
      action.textarea.value = stateCopy.messageTextareaValue;
      return stateCopy

    case ADD_MESSAGE: 
      return {
        ...state,
        messageTextareaValue: "",
        messagesList: [...state.messagesList, {
          name: "Dima",
          avatarUrl: "/img/avatar.jpg",
          time: "9:00",
          message: state.messageTextareaValue,
          id: state.messagesList[state.messagesList.length-1].id + 1
        }]
      }
    
    default: 
      return state
  }  
}

export default dialogReducer

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (textarea) => ({ 
  type: CHANGE_MESSAGE_AREA_VALUE, 
  textarea
})