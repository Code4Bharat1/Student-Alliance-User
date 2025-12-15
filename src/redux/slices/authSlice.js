import { createSlice } from "@reduxjs/toolkit";

const token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null;
const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  token,
  user,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      
      // ✅ localStorage already set in login page, but adding here for safety
      if (typeof window !== "undefined") {
        localStorage.setItem("userToken", action.payload.token);
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      
      if (typeof window !== "undefined") {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userInfo");
      }
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;