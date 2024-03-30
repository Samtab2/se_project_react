import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ handleCardClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items"></section>

      <ClothesSection handleCardClick={handleCardClick} />
    </div>
  );
}

export default Profile;
