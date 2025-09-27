import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./Header";
import Appstore from "./utils/Appstore";

const Applayout = () => {
  return (
    <Provider store={Appstore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Applayout;
