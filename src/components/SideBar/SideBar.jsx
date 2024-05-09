import "./SideBar.css";

function SideBar({ name, avatar, onEditProfileModal, onLogOffProfile }) {
  {
    return (
      <div className="sidebar">
        <img src={avatar} alt="avatar" className="sidebar__avatar" />
        <p className="sidebar__username">{name}</p>
        <div className="sidebar__buttons">
          <button
            onClick={onEditProfileModal}
            type="button"
            className="sidebar__edit-profile-btn">
            Change profile data
          </button>
          <button
            onClick={onLogOffProfile}
            type="button"
            className="sidebar__log-out-btn">
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
