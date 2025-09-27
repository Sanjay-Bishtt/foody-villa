// Landing.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Foodie's Hub!</h1>
        <p className="text-gray-600 mb-6">Your favorite meals delivered fast. Create an account or login to start.</p>
        
        <div className="flex flex-col gap-4">
          <Link 
            to="/signup" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded font-medium transition"
          >
            Create Account
          </Link>
          <Link 
            to="/login" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded font-medium transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
