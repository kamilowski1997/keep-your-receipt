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
import { useDispatch } from '../../../redux/store';
import { actions as authActions } from '../../../redux/slices/auth';
import SecureTextInput from '../../../components/common/TextInput/SecureTextInput/SecureTextInput';
import TextInput from '../../../components/common/TextInput/TextInput';
import { colors } from '../../../consts/colors';
import ScreenBlockerContext from '../../../contexts/ScreenBlockingLoadingContext/ScreenBlockerContext';
import { useSelector } from 'react-redux';
import { selectSignInState } from '../../../redux/slices/auth/selectors';

type Props = NativeStackScreenProps<AuthStackParamList, 'SIGN_IN_SCREEN'>;

const SignInScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('auth');
  const { setScreenBlocker } = useContext(ScreenBlockerContext);
  const signInState = useSelector(selectSignInState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignUp = () => {
    navigation.navigate('SIGN_UP_SCREEN');
  };

  const onSignInButtonPress = () => {
    //TODO ADD VALIDATION
    dispatch(authActions.signIn({ email: email, password: password }));
  };

  useEffect(() => {
    setScreenBlocker &&
      setScreenBlocker({ isOpen: signInState.loading, withLoader: true });
  }, [signInState, setScreenBlocker]);

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
            style={StyleSheet.flatten([styles.textInput, { marginTop: 32 }])}
          />
          <SecureTextInput
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            label={t('password')}
          />
          <Button
            mode={'text'}
            onPress={navigateToSignUp}
            style={styles.navigateToSignUpButton}>
            {t('dontHaveAnAccountYet')}
          </Button>
        </ScrollView>

        <Button
          mode={'contained'}
          onPress={onSignInButtonPress}
          loading={signInState.loading}
          style={styles.signInButton}>
          {t('signIn')}
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    justifyContent: 'space-between',
    paddingBottom: 26,
    backgroundColor: colors.white,
  },
  signInButton: {
    width: '100%',
  },
  inputsContainer: {
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    marginBottom: 16,
  },
  navigateToSignUpButton: {
    marginTop: 16,
  },
});
