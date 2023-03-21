import { AuthState } from '../state';

export const initSignUp = (state: AuthState) => {
  state.signUpState = { loading: true };
};

export const signUpSuccess = (state: AuthState) => {
  state.signUpState = { loading: false, success: true };
};

export const signUpError = (state: AuthState) => {
  state.signUpState = { loading: false, success: false };
};
