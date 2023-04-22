import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Button from '../../../components/common/Button/Button';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/navigators/AuthStack';
import SecureTextInput from '../../../components/common/TextInput/SecureTextInput/SecureTextInput';
import { useDispatch } from '../../../redux/store';
import { actions as authActions } from '../../../redux/slices/auth';
import TextInput from '../../../components/common/TextInput/TextInput';
import { colors } from '../../../consts/colors';
import ScreenBlockerContext from '../../../contexts/ScreenBlockingLoadingContext/ScreenBlockerContext';
import { useSelector } from 'react-redux';
import { selectSignUpState } from '../../../redux/slices/auth/selectors';
import { isEqual } from 'lodash';
import { validateSignUp } from '../../../utils/validators/auth';
import { HelperText } from 'react-native-paper';

type Props = NativeStackScreenProps<AuthStackParamList, 'SIGN_UP_SCREEN'>;

const SignUpScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('auth');
  const { setScreenBlocker } = useContext(ScreenBlockerContext);
  const signUpState = useSelector(selectSignUpState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const clearError = (inputName: string) => () => {
    setErrors(current => {
      return { ...current, [inputName]: '' };
    });
  };

  const navigateToSignIn = () => {
    navigation.navigate('SIGN_IN_SCREEN');
  };

  const onSignUpButtonPress = () => {
    const validationErrors = validateSignUp(
      email.trim(),
      password,
      repeatPassword,
    );
    setErrors(validationErrors);
    if (
      isEqual(validationErrors, { email: '', password: '', repeatPassword })
    ) {
      dispatch(authActions.signUp({ email: email, password: password }));
    }
  };

  useEffect(() => {
    setScreenBlocker &&
      setScreenBlocker({ isOpen: signUpState.loading, withLoader: true });
  }, [signUpState, setScreenBlocker]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.inputsContainer}
          showsVerticalScrollIndicator={false}>
          <TextInput
            mode="outlined"
            label={t('email')}
            value={email}
            onChangeText={setEmail}
            containerStyle={StyleSheet.flatten([
              styles.textInput,
              { marginTop: 32 },
            ])}
            helperText={errors.email}
            error={errors.email !== ''}
            onFocus={clearError('email')}
          />
          <SecureTextInput
            mode="outlined"
            label={t('password')}
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.textInput}
            helperText={errors.password}
            error={errors.password !== ''}
            onFocus={clearError('password')}
          />
          <SecureTextInput
            mode="outlined"
            label={t('repeatPassword')}
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            containerStyle={styles.textInput}
            helperText={errors.repeatPassword}
            error={errors.repeatPassword !== ''}
            onFocus={clearError('repeatPassword')}
          />
          <HelperText type="info" style={styles.passwordHelperText}>
            {t('passwordShouldContainAtLeastSixCharacters')}
          </HelperText>

          {/* TODO ADD REGISTER ERRORS HANDLING  */}

          <Button
            mode={'text'}
            onPress={navigateToSignIn}
            style={styles.navigateToSignInButton}>
            {t('alreadyHaveAnAccount')}
          </Button>
        </ScrollView>

        <Button
          mode={'contained'}
          onPress={onSignUpButtonPress}
          loading={signUpState.loading}
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
    paddingBottom: 26,
    backgroundColor: colors.white,
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
  passwordHelperText: {
    alignSelf: 'flex-start',
  },
});
