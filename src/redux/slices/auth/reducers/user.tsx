import { PayloadAction } from '@reduxjs/toolkit';
import { UserDetailsType } from '../../../../utils/interfaces/auth';
import { AuthState } from '../state';

export const setUser = (
  state: AuthState,
  action: PayloadAction<UserDetailsType>,
) => {
  state.user = action.payload;
};

export const clearUser = (state: AuthState) => {
  state.user = undefined;
};
