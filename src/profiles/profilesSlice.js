import { createSlice } from "@reduxjs/toolkit";


const initialState= [
  {
    profileId: 10,
    managingUserID: 1,
    rememberedName: "Bobby Draper",
    profilePic: require("../../assets/pippa-suave.jpg"),
    coverPic: require('../../assets/cover-pic1.jpg'),
    gallery: "gallery array",
    rememberedCommunity: "list of users"
  },
  {
    profileId: 20,
    managingUserID: 2,
    rememberedName: "Sally Draper",
    profilePic: require("../../assets/pippa-shag.jpg"),
    coverPic: require("../../assets/cover-pic2.jpg"),
    gallery: "gallery array",
    rememberedCommunity: "list of users"
  }
];

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {}
});

export default profilesSlice.reducer;

export const selectProfileById = (state, ID) => 
  state.profiles.find((profile) => profile.profileId === ID)