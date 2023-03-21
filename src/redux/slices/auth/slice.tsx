import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import * as reducers from './reducers';
import { AuthState } from './state';

type Reducers = typeof reducers;

const initialState: AuthState = {
  user: undefined,
  signInState: { loading: false },
  signUpState: { loading: false },
};

export const authSliceName = 'auth';

const slice = createSlice<AuthState, Reducers & { reset: () => AuthState }>({
  name: authSliceName,
  initialState,
  reducers: {
    ...reducers,
    reset: () => initialState,
  },
});

export const { actions, reducer } = slice;

export const selectState = (state: RootState) => state[authSliceName];
