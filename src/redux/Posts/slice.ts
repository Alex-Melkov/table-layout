import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./asyncAction";
import { IPostSliceState, Status } from "./types";

const initialState: IPostSliceState = {
    items: [],
    status: Status.LOADING   //'loading' | 'success' | 'error';
  };
  
const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    idSort(state) {
      state.items.sort((a, b) => (a.id < b.id) ? 1 : -1);
    },
    titleSort(state) {
      state.items.sort((a, b) => a.title.localeCompare(b.title));
    },
    bodySort(state) {
      state.items.sort((a, b) => a.body.localeCompare(b.body));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS; 
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
    }
});

export const { idSort, titleSort, bodySort } = postSlice.actions;
  
export default postSlice.reducer;