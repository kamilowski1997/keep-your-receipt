import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import withAuth from '../hoc/withAuth/withAuth';
import { selectors as authSelectors } from '../redux/slices/auth';
import { AuthStackComponent, AuthStackParamList } from './navigators/AuthStack';
import { MainStackComponent, MainStackParamList } from './navigators/MainStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface AllScreenTypes
  extends AuthStackParamList,
    MainStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenTypes {}
  }
}

export type MainStackScreenProp = NativeStackScreenProps<MainStackParamList>;
export type AuthStackScreenProp = NativeStackScreenProps<AuthStackParamList>;

const Navigation = () => {
  const currentUser = useSelector(authSelectors.selectUser);

  return (
    <NavigationContainer>
      {currentUser ? <MainStackComponent /> : <AuthStackComponent />}
    </NavigationContainer>
  );
};

export default withAuth(Navigation);
