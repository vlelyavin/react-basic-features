import { UserList } from "../../components/UserList";
import { useState, useEffect } from "react";

export const Userpage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const userList = await result.json();
      setUsers(userList);
    };
    setData();
  }, []);
  return (
    <div className="main__container">
      <h1 className="main__title">Users</h1>
      <UserList users={users} />
    </div>
  );
};
