import React from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utils/useRestaurantMenu';
import { RestaurantCategory } from './RestaurantCategory';

export const Restaurnatmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // ✅ Use custom hook

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage
  } = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};


  const regularCards =
    resInfo?.cards
      ?.find(card => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      console.log(regularCards);

  const menuItems = regularCards
    .flatMap(card => card?.card?.card?.itemCards || [])
    .filter(Boolean);
    console.log(regularCards);
  
const categories = regularCards.filter(
        (card) => card?.card?.card?.['@type']?.includes('ItemCategory')
      );
      console.log(categories);
  return (
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold'>{cuisines?.join(', ')} - {costForTwoMessage}</p>
      {categories.map((c)=>(<RestaurantCategory data={c.card.card}/>))}

      
    </div>
  );
};
