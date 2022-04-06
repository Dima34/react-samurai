import ProfileAbout from "./ProfileAbout";
import s from "./Profile.module.css";
import PostBlockContainer from "./PostBlock/PostBlockContainer";
import StoreContext from "../../StoreContext";

const Profile = (p) => {

  return (
  <section className="profile">
    <div
    className={s.intro}
    style={{ backgroundImage: "url('./img/city-image.jpg')" }}
    ></div>

    <ProfileAbout />

    <PostBlockContainer/>
    
    
  </section>
  );
};

export default Profile;
