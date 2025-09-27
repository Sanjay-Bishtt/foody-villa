import { configureStore } from "@reduxjs/toolkit";  // fix import source and add quotes
import Cartreducer from "./Cartslice"

const Appstore = configureStore({
  reducer: {
    cart: Cartreducer,
  },
});

export default Appstore;
