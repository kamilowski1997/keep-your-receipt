import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStackComponent } from './navigators/AuthStack';
import { MainStackComponent } from './navigators/MainStack';

const Navigation = () => {
  //TODO CHANGE MOCKED isAuthenticated
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStackComponent /> : <AuthStackComponent />}
    </NavigationContainer>
  );
};

export default Navigation;
