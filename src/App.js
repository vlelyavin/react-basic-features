import { Routes, Route, Link } from "react-router-dom";
import { Postpage } from "./pages/Postspage";
import { Todopage } from "./pages/Todopage";
import { Userpage } from "./pages/Userpage";

const App = () => {
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
          <Route path="/users" element={<Userpage />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
