import { UserItem } from "../UserItem";

export const UserList = ({ users }) => {
  return (
    <div className="user__list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
