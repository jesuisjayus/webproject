import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState, // Fix typo here
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout } = userSlice.actions;

export default userSlice.reducer;
