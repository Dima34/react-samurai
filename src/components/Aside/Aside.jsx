import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink to="/profile" className={( {isActive} ) =>  (isActive ? s.active : "")} >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className={({ isActive }) => (isActive ? s.active : "")} >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : "")} >
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : "")} >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? s.active : "")} >
              Users
            </NavLink>
          </li>
        </ul>
        <ul className={s.subnav}>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
