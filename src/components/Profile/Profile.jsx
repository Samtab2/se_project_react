import { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ handleCardClick, clothingItems, handleAddClick, handleEditProfileModalClick, handleLogOff, handleCardLikeClick }) {

const { currentUser } =  useContext(CurrentUserContext);

  const addItem = () => {
    handleAddClick();
  };

  const addLike = () => {
    handleCardLikeClick();
  }
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar 
          name={currentUser.name}
          avatar={currentUser.avatar}
          handleEditProfileModalClick={handleEditProfileModalClick}
          handleLogOff={handleLogOff}
        />
      </section>
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={addItem}
        handleCardLikeClick={addLike}
      />
    </div>
  );
}

export default Profile;
