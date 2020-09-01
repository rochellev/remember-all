import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '1', firstName: 'Lady', lastName: 'Ladyperson'},
  {id: '2', firstName: 'Man', lastName: 'Manly'},
  {id: '3', firstName: 'Fluid', lastName: 'McFluid'},
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer