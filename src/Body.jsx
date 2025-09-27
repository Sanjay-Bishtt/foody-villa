import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import PromoCard from "./PromoCard"; // for promoted cards
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "./utils/useOnlinestatus";
import OfflineGame from "./utils/Offlinegame";
import UserContext from "./Usercontext";
import { useContext } from "react";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
const  {setUserinfo,login} =useContext(UserContext);
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      const cards = json?.data?.cards;

      if (!cards) {
        console.warn("❌ No 'cards' found in the response.");
        return;
      }

      let restaurantsList = [];

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const maybeRestaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (maybeRestaurants && Array.isArray(maybeRestaurants)) {
          restaurantsList = maybeRestaurants.map((item) => item.info);
          break;
        }
      }

      setRestaurants(restaurantsList);
      setFilteredRestaurants(restaurantsList);
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    }
  };

  const handleFilter = () => {
    const filtered = restaurants.filter(
      (res) => parseFloat(res.avgRating) > 4
    );
    setFilteredRestaurants(filtered);
  };

  const handleSearch = () => {
    const filtered = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  if (!status) {
    return (
      <>
        <h1 className="text-center text-2xl text-red-500 font-bold mt-10">
          You are offline
        </h1>
        <OfflineGame />
      </>
    );
  }

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="px-6 py-4 max-w-screen-xl mx-auto">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            className="w-full sm:w-64 border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <label>username</label>
          <input className="border border-black p-2" value={login} onChange={(e)=>setUserinfo(e.target.value)} />
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* No Results Message */}
      {filteredRestaurants.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-lg">
          No restaurants match your search.
        </div>
      )}

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((res) => (
          <Link
            key={res.id}
            to={`/restaurants/${res.id}`}
            className="no-underline text-current"
          >
            {res.promoted ? (
              <PromoCard data={res} />
            ) : (
              <RestaurantCard data={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
