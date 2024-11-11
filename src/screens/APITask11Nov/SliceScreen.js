import {createSlice} from '@reduxjs/toolkit';
import {FetchApi} from './FetchApi';

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(FetchApi.pending, state => {
        state.isLoader = true;
      })
      .addCase(FetchApi.fulfilled, (state, action) => {
        console.log('hello123', action.payload);
        // state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(FetchApi.rejected, state => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default ProductSlice.reducer;
