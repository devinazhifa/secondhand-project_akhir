import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: null,
  },
  reducers: {
    addSearch: (state, action) => {
      state.data = action.payload;
    },
    removeSeacrh: (state, action) => {
      state.data = null;
    },
  },
});

export default searchSlice;
