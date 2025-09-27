import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "./Usercontext";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUserinfo } = useContext(UserContext);

  const handleSubmit = async () => {
    setError("");
    try {
      if (isLogin) {
        // ✅ Login
        const res = await axios.post(
          "http://localhost:7777/login",
          { emailId, password },
          { withCredentials: true }
        );
        setUserinfo(res.data.user.firstName);
      } else {
        // ✅ Signup
        const res = await axios.post(
          "http://localhost:7777/signup",
          { firstName, lastName, emailId, password },
          { withCredentials: true }
        );
        setUserinfo(res.data.user.firstName);
      }
      navigate("/app"); // redirect to main app (Body page)
    } catch (err) {
      console.error("Error in login/signup:", err); // full error in console
      if (err.response) {
        setError(err.response.data.error || "Something went wrong");
      } else {
        setError("Network error or server not running");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          {isLogin
            ? "Login to access your account"
            : "Fill the details to create a new account"}
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded font-medium transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </div>

        <p className="text-gray-600 mt-6 text-center">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create an account" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};
