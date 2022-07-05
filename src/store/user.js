import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: localStorage.getItem("user")?.user,
//   token: localStorage.getItem("user")?.token,
// };

// console.log(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    addUser: (state, action) => {
      // action.payload: userData
      state.data = { ...action.payload };
    },
    removeUser: (state) => {
      state.data = null;
    },
  },
});

export default userSlice;
