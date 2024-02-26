import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./src/shared/reducers/login";

export const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
