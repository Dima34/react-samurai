import s from "./Profile.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.info}>
      <h2 className={s.name}>Dima Vavilov</h2>
      <ul>
        <li>Date of birth: 22.09.2002</li>
        <li>City: Kyiv</li>
        <li>
          Website:{" "}
          <a href="https://dima34.github.io/HTML/Portfolio/">
            https://dima34.github.io/HTML/Portfolio/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
