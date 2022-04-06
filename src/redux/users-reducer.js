const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SETUSERS"


let initialState = {
  users: {
    UsersList: [
      {
        avatarUrl: "/img/avatar.jpg",
        name: "Dima",
        status: "Good day!",
        location: "Kyiv",
        followed: true,
        id: 1,
      },
      {
        avatarUrl: "/img/avatar.jpg",
        name: "Maks",
        status: "Good Night!",
        location: "Kyiv",
        followed: false,
        id: 2,
      },
      {
        avatarUrl: "/img/avatar.jpg",
        name: "Dima",
        status: "Good Evening!",
        location: "Kyiv",
        followed: false,
        id: 3,
      },
    ]
      
  }
    
  
}

const userReducer = (state = initialState, action) =>{
  console.log(`state is - `,state);
  let stateCopy
  switch(action.type){
    case FOLLOW:
      stateCopy = {...state, users:{...state.users}}
      stateCopy.users.UsersList=state.users.UsersList.map(u=>{
        if(u.id === action.userId){
          // let userCopy = {...u}
          // userCopy.followed = true
          // return userCopy
          // or just

          return {...u, followed:true}
        }
        return u
      })
      return stateCopy

    case UNFOLLOW:
      stateCopy = {...state, users:{...state.users}}
      stateCopy.users.UsersList=state.users.UsersList.map(u=>{
        if(u.id === action.userId){
          return {...u, followed:false}
        }
        return u
      })
      return stateCopy

    case SET_USERS:
      stateCopy = {...state}
      stateCopy.users.UsersList = [...action.users.UsersList, ...state.users.UsersList] // тут мы склеиваем 2 массива: старый который был + новый что пришел
      
      return stateCopy
    default: 
      return state
  }
}

export default userReducer
// AC - Action Creator
export const followAC = (userId) => ({
  type: FOLLOW,
  userId
})

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
})

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})
