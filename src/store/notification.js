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
  },
});

export default notificationSlice;
