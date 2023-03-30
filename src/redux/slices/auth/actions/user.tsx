import { createAsyncThunk } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { actions } from '../index';
import { LoginData, RegisterData } from '../../../../utils/interfaces/auth';

const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload: RegisterData, thunkApi) => {
    try {
      thunkApi.dispatch(actions.initSignUp());
      await auth().createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );
      thunkApi.dispatch(actions.signUpSuccess());
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
      thunkApi.dispatch(actions.signUpError());
      throw error;
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload: LoginData, thunkApi) => {
    try {
      thunkApi.dispatch(actions.initSignIn());
      await auth().signInWithEmailAndPassword(payload.email, payload.password);
      thunkApi.dispatch(actions.signInSuccess());
    } catch (error: any) {
      console.error(error);
      thunkApi.dispatch(actions.signInError());
      throw error;
    }
  },
);

export { signUp, signIn };
