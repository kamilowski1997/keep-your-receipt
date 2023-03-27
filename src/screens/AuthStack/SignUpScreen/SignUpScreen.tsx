import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import Button from '../../../components/common/Button/Button';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/navigators/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'SIGN_UP_SCREEN'>;

const SignUpScreen = ({ navigation }: Props) => {
  const { t } = useTranslation('auth');

  const navigateToSignIn = () => {
    navigation.navigate('SIGN_IN_SCREEN');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput mode="outlined" placeholder={t('email')} />
        <TextInput
          mode="outlined"
          placeholder={t('password')}
          secureTextEntry
        />
        <TextInput
          mode="outlined"
          placeholder={t('repeatPassword')}
          secureTextEntry
        />
        <Button mode={'text'} onPress={navigateToSignIn}>
          {t('alreadyHaveAnAccount')}
        </Button>
      </View>

      <Button mode={'contained'} onPress={() => {}} style={styles.signUpButton}>
        {t('signUp')}
      </Button>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  signUpButton: {
    width: '100%',
  },
  inputsContainer: {},
});
