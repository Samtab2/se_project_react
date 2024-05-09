import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleCardClick, clothingItems, handleAddClick, currentUser, handleEditProfileModalClick, handleLogOff, handleCardLikeClick }) {


  const addItem = () => {
    handleAddClick();
  };
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar 
          name={currentUser}
          avatar={currentUser}
          handleEditProfileModalClick={handleEditProfileModalClick}
          handleLogOff={handleLogOff}
        />
      </section>
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={addItem}
        onCardLike={handleCardLikeClick}
      />
    </div>
  );
}

export default Profile;
