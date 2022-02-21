import { useRequest } from "../../hooks/useRequest";
import classNames from "classnames";
import "./UserTodos.scss";

export const UserTodos = ({ user }) => {
  const { data, loading } = useRequest(
    `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
  );

  return (
    <div>
      {loading ? (
        <div className="user__info">Loading...</div>
      ) : (
        data.map((todo, idx) => (
          <div key={todo.id} className="user__data__row">
            <div className="user__todo__number">{idx + 1}</div>
            <div
              className={classNames("user__todo__info", {
                done: todo.completed,
              })}
            >
              {todo.title}
            </div>
            <div
              className={classNames("user__checkmark", {
                checked: todo.completed,
              })}
            ></div>
          </div>
        ))
      )}
    </div>
  );
};
