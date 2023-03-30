import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import withAuth from '../hoc/withAuth/withAuth';
import { selectors as authSelectors } from '../redux/slices/auth';
import { AuthStackComponent } from './navigators/AuthStack';
import { MainStackComponent } from './navigators/MainStack';

const Navigation = () => {
  const currentUser = useSelector(authSelectors.selectUser);

  return (
    <NavigationContainer>
      {currentUser ? <MainStackComponent /> : <AuthStackComponent />}
    </NavigationContainer>
  );
};

export default withAuth(Navigation);
