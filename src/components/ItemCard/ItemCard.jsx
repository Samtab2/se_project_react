import "./ItemCard.css";
import { useState } from "react";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const handleClick = () => {
    handleCardClick(item);
  };

  const handleLike = (id) => {
    handleCardLike(id, isLiked);
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />

      <button
        onClick={handleLike}
        type="button"
        className="card__like-button"></button>
    </li>
  );
}

export default ItemCard;
