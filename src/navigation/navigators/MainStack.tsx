import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../../screens/MainStack/HomeScreen/HomeScreen';
import { CommonScreenOptions } from '../CommonScreenOptions';
import LogoutButton from '../../components/common/LogoutButton/LogoutButton';

export type MainStackParamList = {
  HOME_SCREEN: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackComponent = () => {
  const { t: screenTitlesT } = useTranslation('common', {
    keyPrefix: 'screenTitles',
  });

  return (
    <MainStack.Navigator
      screenOptions={{ ...CommonScreenOptions, headerRight: LogoutButton }}>
      <MainStack.Screen
        name={'HOME_SCREEN'}
        component={HomeScreen}
        options={{
          title: screenTitlesT('home') || 'Home',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;
