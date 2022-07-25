import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
  },
  reducers: {
    addProduct: (state, action) => {
      // action.payload: userData
      state.data = { ...action.payload };
    },
    removeProduct: (state, action) => {
      state.data = null;
    },
  },
});

export default productSlice;
