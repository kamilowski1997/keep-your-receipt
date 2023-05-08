import { useDispatch as useDispatchRedux } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as auth from './slices/auth';
import * as receipts from './slices/receipts';

const combinedReducers = combineReducers({
  [auth.authSliceName]: auth.reducer,
  [receipts.receiptsSliceName]: receipts.reducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

// @ts-ignore
type AppDispatch = ReturnType<typeof store>['dispatch'];

type RootState = ReturnType<typeof store.getState>;

const useDispatch = () => useDispatchRedux<AppDispatch>();

export { store, useDispatch };
export type { RootState };
