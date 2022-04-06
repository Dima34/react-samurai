import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import s from "./Profile.module.css";

const ProfileAbout = () => {
  return (
  <div className={s.about}>
    <ProfileAvatar />
    <ProfileInfo />
  </div>
  );
};

export default ProfileAbout;
