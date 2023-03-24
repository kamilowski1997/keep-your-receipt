import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from '../../../components/common/Button/Button';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const SignInScreen = () => {
  const { t } = useTranslation('auth');

  return (
    <View style={styles.container}>
      <View style={styles.inputsView}>
        <TextInput mode="outlined" placeholder={t('email')} />
        <TextInput
          mode="outlined"
          placeholder={t('password')}
          secureTextEntry
        />
      </View>

      <Button mode={'contained'} onPress={() => {}} style={styles.signInButton}>
        {t('signIn')}
      </Button>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  signInButton: {
    width: '100%',
  },
  inputsView: {},
});
