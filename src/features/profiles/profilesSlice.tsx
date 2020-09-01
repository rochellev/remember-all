import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{ managingUserID: '1', rememberedName:'Bobby Draper', profilePic: 'profile profile', coverPic: 'hello cover', gallery:'gallery array', rememberedCommunity: 'list of users'
},
{ managingUserID: '2', rememberedName:'Bobby2 Draper', profilePic: 'profile profile!', coverPic: 'hello cover!', gallery:'gallery array', rememberedCommunity: 'list of users'
}
]

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {}
})

export default profilesSlice.reducer