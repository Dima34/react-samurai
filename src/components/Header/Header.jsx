import s from "./Header.module.css";

const Header = ()=>{return(<header>
  <div className="wrapper">
    <a href="#" className={s.headerLogo}>LOGO</a>
  </div>
</header>);
}

export default Header