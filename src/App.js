import { Routes, Route, Link } from "react-router-dom";
import { Postpage } from "./pages/Postpage/Postpage";
import { Todopage } from "./pages/Todopage/Todopage";
import { Userpage } from "./pages/Userpage/Userpage";
import { UserInfo } from "./components/UserInfo";
import "./style/main.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <Link className="header__link" to="/">
            Posts
          </Link>
          <Link className="header__link" to="/todo">
            Todo
          </Link>
          <Link className="header__link" to="/users">
            Users
          </Link>
        </div>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Postpage />} />
          <Route path="/todo" element={<Todopage />} />
          <Route path="/users" element={<Userpage />}>
            <Route path="/users" element={<p></p>} />
            <Route path="/users/user" element={<UserInfo />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};
