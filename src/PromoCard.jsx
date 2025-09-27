import RestaurantCard from "./RestaurantCard";
import PromotedLabel from "./PromotedLabel";
const PromoCard = ({ data }) => (
  <div className="relative">
    <PromotedLabel />
    <RestaurantCard data={data} />
  </div>
);

export default PromoCard;
