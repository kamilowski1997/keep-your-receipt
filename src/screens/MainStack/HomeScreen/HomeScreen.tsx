import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/common/Button/Button';
import { MainStackParamList } from '../../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';

type Props = NativeStackScreenProps<MainStackParamList, 'HOME_SCREEN'>;

const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation('common');

  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.push('HOME_SCREEN');
        }}>
        {'push home screen'}
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    backgroundColor: colors.white,
  },
});
