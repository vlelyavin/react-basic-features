import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__link" to="/">
          Posts
        </Link>
        <Link className="header__link" to="/todos">
          Todos
        </Link>
        <Link className="header__link" to="/users">
          Users
        </Link>
      </div>
    </header>
  );
};
