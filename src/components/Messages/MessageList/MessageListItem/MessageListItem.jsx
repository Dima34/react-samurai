import s from './MessageListItem.module.css'
import { NavLink } from "react-router-dom"

const MessageListItem = (p)=>{
  let path = `/messages/${p.id}`

  return (
    <li><NavLink to={path} className={({isActive})=>(isActive? s.active : "")}>{p.name}</NavLink></li>
  )
}

export default MessageListItem