// Assuming you're using Redux Toolkit

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    clearcard: (state) => {
      state.items = [];
    },
    removeitem: (state, action) => {

      state.items = state.items.filter(item => item.card?.info?.id !== action.payload);
    },
  },
});

export const { additem, clearcard, removeitem } = cartSlice.actions;
export default cartSlice.reducer;
