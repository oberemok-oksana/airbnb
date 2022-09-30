import star from "../images/star.png";

const Card = ({ item }) => {
  const {
    coverImg,
    stats: { rating, reviewCount },
    location,
    title,
    price,
    openSpots,
  } = item;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img src={`/images/${coverImg}`} alt={title} className="card-img" />
      <div className="card-content">
        <div className="card-rating">
          <img src={star} alt="rating" />
          <span>{rating}</span>
          <span>({reviewCount}) • </span>
          <span>{location}</span>
        </div>
        <p className="card-text">{title}</p>
        <p className="card-text">
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
      {badgeText && <div className="status">{badgeText}</div>}
    </div>
  );
};

export default Card;
