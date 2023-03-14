import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../Posts/types";
import { fetchPostsCount } from "./asyncActions";
import { IPaginateSliceState } from "./types";

const initialState: IPaginateSliceState = {
    pageCount: 0,
    pageNumber: 1,
    status: Status.LOADING   //'loading' | 'success' | 'error';
  };

const paginateSlice = createSlice({
  name: 'paginate',
  initialState: initialState,
  reducers: {
    pageGoForward(state) {
      state.pageNumber++
    },
    pageGoBack(state) {
      state.pageNumber--
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsCount.pending, (state) => {
        state.status = Status.LOADING;
        state.pageCount = 0;
      })
      .addCase(fetchPostsCount.fulfilled, (state, action) => {
        state.pageCount = action.payload;
        state.status = Status.SUCCESS; 
      })
      .addCase(fetchPostsCount.rejected, (state) => {
        state.status = Status.ERROR;
        state.pageCount = 0;
      })
    }
});

export const { pageGoForward, pageGoBack } = paginateSlice.actions;

export default paginateSlice.reducer;