import React from "react"
import s from "./Users.module.css"

let Users = (p) =>{
  let users = p.users.UsersList; 

  return (
    <div>
      {
        users.map(el=>(
          <div key = {el.id} className={s.userBlock}>
            <div className={s.userHeader}>
              <img className={s.userImage} src={el.avatarUrl} alt="" />
              <p>{el.location}</p>
            </div>
            <div className={s.userText}>
              <h2>
                {el.name}
              </h2>
              <p>
                {el.status}
              </p>
            </div>
            <div className={s.userBottom}>
              {el.followed ? 
              <button onClick={()=>{p.unFollow(el.id)}}>Unfollow</button> : 
              <button onClick={()=>{p.follow(el.id)}}>Follow</button>} 
            </div>
          </div>  
        ))
      }
    </div>
  )
}

export default Users

