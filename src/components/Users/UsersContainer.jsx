import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'


const mapStateToProps = (state) => {
    return {
        users: {...state.users.users}
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
