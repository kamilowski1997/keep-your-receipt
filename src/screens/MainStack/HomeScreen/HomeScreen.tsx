import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Button from '../../../components/common/Button/Button';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const { t } = useTranslation('common');

  return (
    <View>
      <Text>{t('hello')}</Text>
      <Button
        mode="contained"
        onPress={() => {
          auth().signOut();
        }}>
        {'Logout'}
      </Button>
    </View>
  );
};

export default HomeScreen;
