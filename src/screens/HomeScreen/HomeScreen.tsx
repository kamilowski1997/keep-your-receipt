import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

const HomeScreen = () => {
  const { t } = useTranslation('common');
  return <Text>{t('hello')}</Text>;
};

export default HomeScreen;
