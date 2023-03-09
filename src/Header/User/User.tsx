import logo from "./logoUser.svg";
import style from "./User.module.scss";

const User = () => {
  return (
    <div className={style.user}>
      <img src={logo} alt="User" />
    </div>
  );
};

export default User;
