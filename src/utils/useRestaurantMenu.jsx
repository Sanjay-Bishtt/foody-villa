import { useState, useEffect } from 'react';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return; // ✅ Prevent fetch if resId is undefined/null

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`
        );
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      }
    };

    fetchData(); 
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
