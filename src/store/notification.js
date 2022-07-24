import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    data: null,
  },
  reducers: {
    updateNotification: (state, action) => {
      state.data = action.payload;
    },
    removeNotification: (state) => {
      state.data = null;
    },
  },
});

export default notificationSlice;
