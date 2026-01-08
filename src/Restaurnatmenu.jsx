import React from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const Restaurnatmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
  } =
    resInfo?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter((card) =>
    card?.card?.card?.["@type"]?.includes("ItemCategory")
  );

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-6">
      
      {/* RESTAURANT INFO */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">
          {name}
        </h1>

        <p className="text-sm sm:text-base text-gray-700 font-medium">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      {/* MENU CATEGORIES */}
      <div className="space-y-4">
        {categories.map((c) => (
          <RestaurantCategory
            key={c.card.card.title}
            data={c.card.card}
          />
        ))}
      </div>
    </div>
  );
};
