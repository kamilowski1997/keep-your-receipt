import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { DefaultFont, getDynamicFontSize } from '../consts/fonts';
import NavigationHeaderComponent from '../components/common/NavigationHeaderComponent/NavigationHeaderComponent';

export const CommonScreenOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerTitleStyle: {
    fontSize: getDynamicFontSize(30),
    fontFamily: DefaultFont.w600,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  orientation: 'portrait',
  title: '',
  header: props => <NavigationHeaderComponent {...props} />,
};
