import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../../screens/MainStack/HomeScreen/HomeScreen';
import { CommonScreenOptions } from '../CommonScreenOptions';
import LogoutButton from '../../components/common/LogoutButton/LogoutButton';
import AddReceiptScreen from '../../screens/MainStack/AddReceiptScreen/AddReceiptScreen';
import EditReceiptScreen from '../../screens/MainStack/EditReceiptScreen/EditReceiptScreen';

export type MainStackParamList = {
  HOME_SCREEN: undefined;
  ADD_RECEIPT_SCREEN: undefined;
  EDIT_RECEIPT_SCREEN: undefined;
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
      <MainStack.Screen
        name={'ADD_RECEIPT_SCREEN'}
        component={AddReceiptScreen}
        options={{
          title: screenTitlesT('addReceipt') || 'New receipt',
        }}
      />
      <MainStack.Screen
        name={'EDIT_RECEIPT_SCREEN'}
        component={EditReceiptScreen}
        options={{
          title: screenTitlesT('editReceipt') || 'Edit receipt',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;
