import "./ItemCard.css";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const handleClick = () => {
    handleCardClick(item);
  };

  const handleLike = () => {
    handleCardLike(item);
  };

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
