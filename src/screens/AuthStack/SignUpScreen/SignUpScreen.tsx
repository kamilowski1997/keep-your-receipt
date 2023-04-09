import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Button from '../../../components/common/Button/Button';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/navigators/AuthStack';
import SecureTextInput from '../../../components/common/SecureTextInput/SecureTextInput';
import { useDispatch } from '../../../redux/store';
import { actions as authActions } from '../../../redux/slices/auth';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';

type Props = NativeStackScreenProps<AuthStackParamList, 'SIGN_UP_SCREEN'>;

const SignUpScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('auth');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigateToSignIn = () => {
    navigation.navigate('SIGN_IN_SCREEN');
  };

  const onSignUpButtonPress = () => {
    //TODO ADD VALIDATION
    dispatch(authActions.signUp({ email: email, password: password }));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.inputsContainer}
          showsVerticalScrollIndicator={false}>
          <TextInput
            mode="outlined"
            placeholder={t('email')}
            value={email}
            onChangeText={setEmail}
            style={StyleSheet.flatten([styles.textInput, { marginTop: 32 }])}
          />
          <SecureTextInput
            mode="outlined"
            placeholder={t('password')}
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          />
          <SecureTextInput
            mode="outlined"
            placeholder={t('repeatPassword')}
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            style={styles.textInput}
          />
          <Button
            mode={'text'}
            onPress={navigateToSignIn}
            style={styles.navigateToSignInButton}
            labelStyle={styles.navigateToSignInButtonLabel}>
            {t('alreadyHaveAnAccount')}
          </Button>
        </ScrollView>

        <Button
          mode={'contained'}
          onPress={onSignUpButtonPress}
          style={styles.signUpButton}>
          {t('signUp')}
        </Button>
      </View>
    </TouchableWithoutFeedback>
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
  inputsContainer: {
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    marginBottom: 16,
  },
  navigateToSignInButton: {
    marginTop: 16,
  },
  navigateToSignInButtonLabel: {
    fontFamily: DefaultFont.w600,
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
  },
});
