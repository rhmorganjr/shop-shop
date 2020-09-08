import { createSlice } from '@reduxjs/toolkit';
//import useProductReducer from './reducers';
const initialState = [];

const productsSlice = createSlice ({
  name: 'products',
  initialState
})

export default productsSlice.reducer;