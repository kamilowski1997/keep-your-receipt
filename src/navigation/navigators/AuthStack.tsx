import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SignInScreen from '../../screens/AuthStack/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/AuthStack/SignUpScreen/SignUpScreen';

export type AuthStackParamList = {
  SIGN_IN_SCREEN: undefined;
  SIGN_UP_SCREEN: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackComponent = () => {
  const { t: screenTitlesT } = useTranslation('common', {
    keyPrefix: 'screenTitles',
  });

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'SIGN_IN_SCREEN'}
        component={SignInScreen}
        options={{ title: screenTitlesT('signIn') || 'Sign In' }}
      />
      <AuthStack.Screen
        name={'SIGN_UP_SCREEN'}
        component={SignUpScreen}
        options={{ title: screenTitlesT('signUp') || 'Sign Up' }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
