import { createSelector } from '@reduxjs/toolkit';
import { selectState } from '../slice';
import { AuthState } from '../state';

const selectUser = createSelector(
  selectState,
  (state: AuthState) => state.user,
);

const selectSignInState = createSelector(
  selectState,
  (state: AuthState) => state.signInState,
);

const selectSignUpState = createSelector(
  selectState,
  (state: AuthState) => state.signUpState,
);

export { selectUser, selectSignUpState, selectSignInState };
