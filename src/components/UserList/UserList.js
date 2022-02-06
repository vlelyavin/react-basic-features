import "./UserList.scss";

export const UserList = ({ users }) => {
  return (
    <div className="user__list">
      {users.map((user) => (
        <div className="user">
          <img
            src={`https://bootdey.com/img/Content/avatar/avatar${
              Math.round(Math.random() * 6) + 2
            }.png`}
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">{user.username}</div>
            <div className="user__corp">{user.name}</div>
            <div className="user__corp">{user.company.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
