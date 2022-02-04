import "./Userpage.scss";

export const Userpage = () => {
  return (
    <div className="main__container">
      <h1 className="main__title">Users</h1>
      <div className="user__list">
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">Lucas Smith</div>
            <div className="user__corp">Apple, Inc.</div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar8.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">Janet Abshire</div>
            <div className="user__corp">Facebook</div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">John Doe</div>
            <div className="user__corp">Google</div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">Korben Dallas</div>
            <div className="user__corp">Reddit</div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">Jennifer Weber</div>
            <div className="user__corp">Coursera</div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
            className="user__avatar"
            alt="user"
          />
          <div className="user__data">
            <div className="user__name">Thomas Lee</div>
            <div className="user__corp">Tinder</div>
          </div>
        </div>
      </div>
    </div>
  );
};
