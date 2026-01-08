import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import PromoCard from "./PromoCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "./utils/useOnlinestatus";
import OfflineGame from "./utils/Offlinegame";
import UserContext from "./Usercontext";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { setUserinfo, login } = useContext(UserContext);
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();

      const cards = json?.data?.cards;
      let list = [];

      for (let card of cards || []) {
        const data =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(data)) {
          list = data.map((r) => r.info);
          break;
        }
      }

      setRestaurants(list);
      setFilteredRestaurants(list);
    } catch (err) {
      console.error("Error fetching restaurants", err);
    }
  };

  const handleSearch = () => {
    const result = restaurants.filter((r) =>
      r.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilteredRestaurants(result);
  };

  const handleFilter = () => {
    const result = restaurants.filter(
      (r) => parseFloat(r.avgRating) > 4
    );
    setFilteredRestaurants(result);
  };

  if (!status) {
    return (
      <div className="text-center mt-12">
        <h1 className="text-xl font-semibold text-red-500">
          You are offline
        </h1>
        <OfflineGame />
      </div>
    );
  }

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        
        {/* Search */}
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="flex-1 sm:w-64 border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {/* Username */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Username</label>
          <input
            value={login}
            onChange={(e) => setUserinfo(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Filter */}
        <button
          onClick={handleFilter}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
        >
          Top Rated
        </button>
      </div>

      {/* Empty State */}
      {filteredRestaurants.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No restaurants found
        </p>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((res) => (
          <Link key={res.id} to={`/restaurants/${res.id}`}>
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
