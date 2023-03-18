import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackComponent } from './navigators/MainStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackComponent />
    </NavigationContainer>
  );
};

export default Navigation;
