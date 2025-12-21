// App.jsx
import React, { useState, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Applayout";
import { Body } from "./Body";
import { About } from "./About";
import { Contact } from "./Contact";
import ErrorPage from "./Error";
import { Restaurnatmenu } from "./Restaurnatmenu";
import { Cart } from "./Cart";
import { Login } from './Login'
import UserContext from "./Usercontext";

const Grocery = lazy(() => import("./utils/Grocery"));

function AppWrapper() {
  const [userinfo, setUserinfo] = useState(null);

  const router = createBrowserRouter([
    
    {
      path: "/", 
      element: <Applayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Body /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "restaurants/:resId", element: <Restaurnatmenu /> },
        {
          path: "grocery",
          element: (
            <Suspense fallback={<h2>Loading Grocery Page...</h2>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <UserContext.Provider value={{ login: userinfo, setUserinfo }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default AppWrapper;
