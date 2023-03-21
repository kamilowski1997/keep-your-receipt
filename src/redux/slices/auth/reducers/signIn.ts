import { AuthState } from '../state';

export const initSignIn = (state: AuthState) => {
  state.signInState = { loading: true };
};

export const signInSuccess = (state: AuthState) => {
  state.signInState = { loading: false, success: true };
};

export const signInError = (state: AuthState) => {
  state.signInState = { loading: false, success: false };
};
