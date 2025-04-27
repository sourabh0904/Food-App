import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  img,
}) => {
  return (
    <div className="restraunt-card">
      {/* <img src={burgerKing.image} /> */}
      <img src={img} />
      <div className="restraunt-details">
        <h2>{name}</h2>
        <h4>{lastMileTravelString}</h4>
        {/* <h2>{burgerKing.name}</h2>
        <h4>{burgerKing.rating}</h4> */}
      </div>
      <h3>{cuisines.join(",")}</h3>
    </div>
  );
};

export default RestaurantCard;
