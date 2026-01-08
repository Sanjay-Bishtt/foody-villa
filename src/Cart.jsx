import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { clearcard, removeitem } from "./utils/Cartslice";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartitems.reduce((acc, item) => {
    const price =
      item.card?.info?.price ??
      item.price ??
      item.defaultPrice ??
      0;
    return acc + price;
  }, 0);

  const toggleCart = () => setIsOpen(!isOpen);
  const handleClearCart = () => dispatch(clearcard());
  const handleRemoveItem = (id) => dispatch(removeitem(id));

  return (
    <div className="max-w-lg lg:max-w-xl mx-auto my-6 px-3 sm:px-0">
      {/* CART HEADER */}
      <button
        onClick={toggleCart}
        className="flex items-center w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-3 rounded-md shadow transition"
      >
        <FaShoppingCart className="mr-2" />
        <span>Cart ({cartitems.length})</span>
        <span className="ml-auto">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* CART BODY */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-md shadow border overflow-hidden">
          {cartitems.length === 0 ? (
            <p className="p-6 text-center text-gray-500 italic">
              Your cart is empty
            </p>
          ) : (
            <>
              {/* ITEMS LIST */}
              <div className="max-h-80 overflow-y-auto divide-y">
                {cartitems.map((item, index) => {
                  const info = item.card?.info || item;
                  const price =
                    info.price ?? info.defaultPrice ?? 0;

                  return (
                    <div
                      key={info.id || index}
                      className="flex flex-col sm:flex-row gap-4 p-4"
                    >
                      {/* IMAGE */}
                      {info.imageId ? (
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                          alt={info.name}
                          className="w-full sm:w-16 h-40 sm:h-16 object-cover rounded"
                        />
                      ) : (
                        <div className="w-full sm:w-16 h-40 sm:h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                          No Image
                        </div>
                      )}

                      {/* INFO */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {info.name}
                        </h3>

                        {info.description && (
                          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                            {info.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-pink-600 font-semibold">
                            ₹{(price / 100).toFixed(2)}
                          </span>

                          <button
                            onClick={() => handleRemoveItem(info.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FOOTER */}
              <div className="border-t p-4 space-y-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-pink-600">
                    ₹{(totalPrice / 100).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleClearCart}
                  disabled={cartitems.length === 0}
                  className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 disabled:opacity-50"
                >
                  Clear Cart
                </button>

                <button
                  disabled={cartitems.length === 0}
                  className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 disabled:opacity-50"
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
