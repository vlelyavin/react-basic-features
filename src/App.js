import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Postpage } from "./pages/Postpage/Postpage";
import { Todopage } from "./pages/Todopage/Todopage";
import { Userpage } from "./pages/Userpage/Userpage";
import { UserInfo } from "./components/UserInfo";
import "./main.scss";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Postpage />} />
        <Route path="/todos" element={<Todopage />} />
        <Route path="/users" element={<Userpage />}>
          <Route path="/users" element={<p></p>} />
          <Route path="/users/user" element={<UserInfo />} />
        </Route>
      </Routes>
    </div>
  );
};
