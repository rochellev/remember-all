import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./src/profiles/profilesSlice";
import usersReducer from "./src/users/usersSlice";

// export default configureStore({
//   reducer: {
//     profiles: profilesReducer,
//     users: usersReducer
//   }
// })

  export const getStore = () =>
  configureStore({
    reducer: {
      profiles: profilesReducer,
      users: usersReducer
    }
  });
