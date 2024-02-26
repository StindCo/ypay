import { createSlice, Reducer, Slice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

export const loginSlice: Slice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: ""
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload?.user;
    },
    setToken: (state, action) => {
      state.user = action.payload?.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions, reducer } = loginSlice;

export const { loginUser, setToken } = actions;

export const getUser = (state: any) => state.user.user;

export default reducer;
