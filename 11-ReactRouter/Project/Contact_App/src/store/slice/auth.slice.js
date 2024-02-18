import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  auth: false,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    login: (state, action) => {
      state.loading = true;
      state.error = null;
      state.data = action.payload;
      state.auth = true;
    },
    logout: (store, action) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
  },
});

export const { processing, login, logout, error } = authSlice.actions;
export default authSlice.reducer;
