import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState } from "./types";

const initialState: IFilterSliceState = {
    search: '',
  };
  
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;
  
export default filterSlice.reducer;