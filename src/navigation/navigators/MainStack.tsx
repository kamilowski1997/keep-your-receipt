import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

export type MainStackParamList = {
  HOME_SCREEN: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackComponent = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'HOME_SCREEN'}
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;
