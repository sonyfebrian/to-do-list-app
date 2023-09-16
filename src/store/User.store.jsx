import { createSlice } from "@reduxjs/toolkit";

const userData = [
  {
    email: "user1@example.com",
    password: "password1",
    name: "john",
    role: "admin",
  },
  {
    email: "user2@example.com",
    password: "password2",
    name: "doe",
    role: "user",
  },
];

const initialState = {
  users: userData,
  user: null,
  state: {
    isFetching: false,
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
