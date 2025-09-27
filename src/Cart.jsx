import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; 
import { clearcard, removeitem } from './utils/Cartslice'; // import removeitem action

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartitems.reduce((acc, item) => {
    const price = item.card?.info?.price ?? item.price ?? item.defaultPrice ?? 0;
    return acc + price;
  }, 0);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleClearCart = () => {
    dispatch(clearcard());
  };

  // New function to remove individual item
  const handleRemoveItem = (id) => {
    dispatch(removeitem(id));
  };

  return (
    <div className="max-w-md mx-auto my-6">
      {/* Cart Header */}
      <button
        onClick={toggleCart}
        className="flex items-center justify-center w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-3 rounded-md shadow-md focus:outline-none transition"
        aria-expanded={isOpen}
        aria-controls="cart-content"
      >
        <FaShoppingCart className="mr-2" />
        <span>Cart ({cartitems.length})</span>
        <span className="ml-auto text-xl">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Cart Content */}
      {isOpen && (
        <div
          id="cart-content"
          className="mt-4 bg-white rounded-md shadow-md border border-gray-300 overflow-hidden"
        >
          {cartitems.length === 0 ? (
            <p className="p-6 text-center text-gray-500 italic">Your cart is empty.</p>
          ) : (
            <>
              {/* Scrollable items list */}
              <div className="max-h-72 overflow-y-auto divide-y divide-gray-200">
                {cartitems.map((item, index) => {
                  const info = item.card?.info || item;
                  const price = info.price ?? info.defaultPrice ?? 0;

                  return (
                    <div
                      key={info.id || index}
                      className="flex items-center p-4 space-x-4"
                    >
                      {/* Image */}
                      {info.imageId ? (
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                          alt={info.name}
                          className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}

                      {/* Info */}
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800">{info.name}</h3>
                        {info.description && (
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        )}
                        <p className="text-pink-600 font-semibold mt-1">
                          ₹{(price / 100).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity (Assuming 1) */}
                      <div className="text-gray-600 font-medium">x1</div>

                      {/* Remove button */}
                      <button
                        onClick={() => handleRemoveItem(info.id)}
                        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Total, Clear Cart & Checkout Buttons */}
              <div className="border-t border-gray-200 p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total:</span>
                  <span className="text-pink-600 font-bold text-lg">
                    ₹{(totalPrice / 100).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleClearCart}
                  disabled={cartitems.length === 0}
                  className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Clear Cart
                </button>

                <button
                  disabled={cartitems.length === 0}
                  className="w-full bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
