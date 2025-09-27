import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem } from './utils/Cartslice';

export const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch =useDispatch();
  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  // Mock function – integrate with your cart logic
  const addToCart = (item) => {
    dispatch(additem(item))
  
  };

  return (
    <div className="w-full max-w-screen-md mx-auto my-4 bg-white rounded-md shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
        onClick={toggleCategory}
      >
        <span className="font-semibold text-lg">{data.title}</span>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Item List */}
      {isOpen && (
        <div className="divide-y">
          {data.itemCards?.map((item) => {
            const info = item.card?.info;
            return (
              <div
                key={info.id}
                className="flex justify-between gap-4 p-4 text-left items-start"
              >
                {/* Left Text Content */}
                <div className="flex-1">
                  <p className="font-medium">{info.name}</p>
                  <p className="text-sm text-gray-600 mb-1">
                    ₹{(info.price || info.defaultPrice) / 100}
                  </p>
                  {info.description && (
                    <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    className="mt-2 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                    onClick={()=>addToCart(item)}
                  >
                    + Add
                  </button>
                </div>

                {/* Right Image */}
                {info.imageId && (
                  <div className="relative w-24 h-24">
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
