const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SETUSERS"


let initialState = {
    users: {
        UsersList: [
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: true,
                id: 1,
            },
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: false,
                id: 2,
            },
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: false,
                id: 3,
            },
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: false,
                id: 4,
            },
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: true,
                id: 5,
            },
            {
                avatar: "",
                name: "",
                status: "",
                location: "",
                followed: true,
                id: 6,
            },
        
        ]
            
    }
        
    
}

const userReducer = (state = initialState, action) =>{

    switch(action.type){
        case FOLLOW:
            let stateCopy = {...state, users:{...state.users}}
            stateCopy.users.UsersList=state.users.UsersList.map(u=>{
                if(u.id === action.userId){
                    // let userCopy = {...u}
                    // userCopy.followed = true
                    // return userCopy
                    // or just

                    return {...u, followed=true}
                }
                return u
            })

        case UNFOLLOW:
            let stateCopy = {...state, users:{...state.users}}
            stateCopy.users.UsersList=state.users.UsersList.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed=false}
                }
                return u
            })

        case SET_USERS:
            return {...state, users: [...action.users, ...state.users]}// тут мы склеиваем 2 массива: старый который был + новый что пришел
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
