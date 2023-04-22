import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { colors } from '../../../consts/colors';

const Loader = (props: ActivityIndicatorProps) => (
  <ActivityIndicator size="large" color={colors.primary} {...props} />
);

export default Loader;
