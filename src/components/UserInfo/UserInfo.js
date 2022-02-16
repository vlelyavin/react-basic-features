import { useOutletContext } from "react-router-dom";
import "./UserInfo.scss";

export const UserInfo = () => {
  const user = useOutletContext();
  return (
    <div>
      <div className="user__info__column">
        <div className="user__info">{user.email}</div>
        <div className="user__info">{user.phone}</div>
        <div className="user__info">{user.company.bs}</div>
        <div className="user__info">{user.company.catchPhrase}</div>
        <div className="user__info">{user.website}</div>
      </div>
    </div>
  );
};
