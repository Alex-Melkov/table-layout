import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import postReducer from './Posts/slice';
import paginateReducer from './Paginate/slice';
import filterReducer from './Filter/slice';

export const store = configureStore({
  reducer: {
    postReducer,
    paginateReducer,
    filterReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;