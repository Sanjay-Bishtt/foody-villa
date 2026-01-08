import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "./utils/Cartslice";

export const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleCategory = () => setIsOpen(!isOpen);

  const addToCart = (item) => {
    dispatch(additem(item));
  };

  return (
    <div className="w-full max-w-screen-md mx-auto my-4 bg-white rounded-md shadow border border-gray-200">
      
      {/* CATEGORY HEADER */}
      <div
        onClick={toggleCategory}
        className="flex justify-between items-center px-4 py-3 sm:py-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
      >
        <span className="font-semibold text-base sm:text-lg">
          {data.title}
        </span>
        <span className="text-lg sm:text-xl">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* ITEMS */}
      {isOpen && (
        <div className="divide-y">
          {data.itemCards?.map((item) => {
            const info = item.card?.info;

            return (
              <div
                key={info.id}
                className="flex flex-col sm:flex-row gap-4 p-4"
              >
                {/* LEFT CONTENT */}
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base">
                    {info.name}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    ₹{(info.price || info.defaultPrice) / 100}
                  </p>

                  {info.description && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                      {info.description}
                    </p>
                  )}

                  <button
                    onClick={() => addToCart(item)}
                    className="mt-2 px-4 py-1.5 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                  >
                    + Add
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                {info.imageId && (
                  <div className="w-full sm:w-24 h-40 sm:h-24">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                      alt={info.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
