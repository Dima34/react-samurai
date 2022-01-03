const ADD_POST = 'ADD-POST'
const CHANGE_POST_AREA_VALUE = 'CHANGE-POST-AREA-VALUE'

let initialState = {
    postTextareaValue: "",
    postsData: [
        { text: "Write me if u wanna it", avatarUrl: "/img/avatar.jpg", id:1 },
        { text: "Do u wanna Beer? :)", avatarUrl: "/img/avatar.jpg", id:2 },
        { text: "Hi! My name is Dima, and that is my first post", avatarUrl: "/img/avatar.jpg", id:3 },
    ]
}

const profileReducer = (state = initialState, action) =>{
    let stateCopy

    switch(action.type){
        case ADD_POST: 
            stateCopy = {
                ...state,
                postsData: [...state.postsData] // Создаем копию стейта и перезаписываем(в нашем случае делаем копию) свойство postsData
            }
            // Same as
            // let stateCopy = {...state}
            // stateCopy.postsData = [...state.postsData]

            let newPost = {
                text: state.postTextareaValue,
                avatarUrl: "/img/avatar.jpg",
                id: state.postsData[state.postsData.length-1].id + 1
            }
            
            stateCopy.postTextareaValue = ""
            stateCopy.postsData.push(newPost)
            return stateCopy
                  
        case CHANGE_POST_AREA_VALUE: 
            stateCopy = {...state}

            stateCopy.postTextareaValue = action.textarea.value;
            action.textarea.value = stateCopy.postTextareaValue;
            return stateCopy        
            
        default: 
            return state
    }

    
}

export default profileReducer

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (textarea) => ({ 
    type: CHANGE_POST_AREA_VALUE, 
    textarea
})