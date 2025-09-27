import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Usercontext from './Usercontext';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useContext(Usercontext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.kindpng.com/picc/m/674-6746080_chef-food-logo-design-creative-food-logo-design.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-bold text-gray-800">Foodie's Hub</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 items-center text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="relative hover:text-pink-600 transition"
              >
                <span className="text-xl">Cart</span>
                <span className="ml-1 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleLogin}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition"
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </li>
            {login && (
              <li className="text-sm text-gray-600 italic">
                Welcome, {login}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
