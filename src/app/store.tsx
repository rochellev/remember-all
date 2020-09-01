import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../features/profiles/profilesSlice";
export const getStore = () =>
  configureStore({
    reducer: {
      profiles: profilesReducer
    }
  });
