import s from "./Profile.module.css";

const ProfileAvatar = () => {
  return (
  <div className={s.avatar}>
    <img src={"./img/avatar.jpg"} alt="Dima`s icon" />
  </div>
  );
};

export default ProfileAvatar;
