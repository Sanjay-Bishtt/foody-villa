// Grocery.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { additem } from './Cartslice';

const groceryItems = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 12000, // price in paisa
    image: 'https://source.unsplash.com/300x300/?apples',
  },
  {
    id: 2,
    name: 'Bananas',
    price: 5000,
    image: 'https://source.unsplash.com/300x300/?bananas',
  },
  {
    id: 3,
    name: 'Milk',
    price: 4500,
    image: 'https://source.unsplash.com/300x300/?milk',
  },
  {
    id: 4,
    name: 'Bread',
    price: 3000,
    image: 'https://source.unsplash.com/300x300/?bread',
  },
  // Add more items as needed
];

const Grocery = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(additem(item));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Grocery Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-pink-600 font-bold">₹{(item.price / 100).toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
