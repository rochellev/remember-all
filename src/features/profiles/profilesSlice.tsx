import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{ managingUserID: '1', profilePic: 'profile profile', coverPic: 'hello cover', gallery:'gallery array', rememberedCommunity: 'list of users'
},
{ managingUserID: '2', profilePic: 'profile profile!', coverPic: 'hello cover!', gallery:'gallery array', rememberedCommunity: 'list of users'
}
]

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {}
})

export default profilesSlice.reducer