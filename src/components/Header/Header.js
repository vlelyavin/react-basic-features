import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__link" to="/react-basic-features/">
          Posts
        </Link>
        <Link className="header__link" to="/react-basic-features/todos">
          Todos
        </Link>
        <Link className="header__link" to="/react-basic-features/users">
          Users
        </Link>
      </div>
    </header>
  );
};
