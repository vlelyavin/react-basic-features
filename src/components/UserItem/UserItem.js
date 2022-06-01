import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./UserItem.scss";

export const UserItem = ({ user }) => {
  const [hidden, setHidden] = useState(false);
  const toggleVisible = () => {
    setHidden(!hidden);
  };

  const img = `https://bootdey.com/img/Content/avatar/avatar7.png`;

  return (
    <div>
      <div className="user" key={user.id}>
        <img src={img} className="user__avatar" alt="user" />
        <div className="user__data">
          <div className="user__name">{user.username}</div>
          <div className="user__corp">{user.name}</div>
          <div className="user__corp">{user.company.name}</div>
          <Link className="user__link" to="/users/user" id={user.id} onClick={toggleVisible}>
            More...
          </Link>
          <div className="outlet">{hidden ? <Outlet context={user} /> : null}</div>
        </div>
      </div>
    </div>
  );
};
