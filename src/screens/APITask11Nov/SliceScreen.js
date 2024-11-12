import {createSlice} from '@reduxjs/toolkit';
import {FetchApi} from './FetchApi';

const initialState = {
  data: [],
  isLoader: false,
  isError: false,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.data = state.data.filter(item => item.search_id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(FetchApi.pending, state => {
        state.isLoader = true;
      })
      .addCase(FetchApi.fulfilled, (state, action) => {
        console.log('hello123', action.payload);
        state.data = action.payload;
      })
      .addCase(FetchApi.rejected, state => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});
export const {deleteUser} = ProductSlice.actions;
export default ProductSlice.reducer;
