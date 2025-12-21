import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Usercontext from "./Usercontext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { login } = useContext(Usercontext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.kindpng.com/picc/m/674-6746080_chef-food-logo-design-creative-food-logo-design.png"
            alt="Logo"
            className="h-10 sm:h-12 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Foodie's Hub
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>

            <li>
              <Link to="/cart" className="relative hover:text-pink-600">
                Cart
                <span className="ml-1 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li>
              <button
                onClick={toggleLogin}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>

            {login && (
              <li className="text-sm text-gray-500 italic">
                Hi, {login}
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              Cart
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            <button
              onClick={toggleLogin}
              className="bg-pink-500 text-white py-2 rounded"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>

            {login && (
              <span className="text-sm text-gray-500 italic">
                Hi, {login}
              </span>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};
