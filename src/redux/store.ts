import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import meReducer from './me/meSlice';
import appReducer from './app/appSlice';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
export const store = configureStore({
  reducer: {
    me: meReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()