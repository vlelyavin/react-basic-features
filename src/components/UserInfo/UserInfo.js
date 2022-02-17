import { useOutletContext } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { UserAlbums } from "../UserAlbum";
import { UserTodos } from "../UserTodos";
import { UserPosts } from "../UserPosts";
import "./UserInfo.scss";

export const UserInfo = () => {
  const user = useOutletContext();
  return (
    <div className="user__info__row">
      <div className="user__info__tabs">
        <Tabs>
          <TabList>
            <Tab>Albums</Tab>
            <Tab>Todos</Tab>
            <Tab>Posts</Tab>
          </TabList>

          <TabPanel>
            <UserAlbums user={user} />
          </TabPanel>
          <TabPanel>
            <UserTodos user={user} />
          </TabPanel>
          <TabPanel>
            <UserPosts user={user} />
          </TabPanel>
        </Tabs>
      </div>
      <div className="user__info__column">
        <div className="user__info">{user.email}</div>
        <div className="user__info">{user.phone}</div>
        <div className="user__info">{user.company.bs}</div>
        <div className="user__info">{user.company.catchPhrase}</div>
        <div className="user__info">{user.website}</div>
      </div>
    </div>
  );
};
