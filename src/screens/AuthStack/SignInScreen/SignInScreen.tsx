import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../../../components/common/Button/Button';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/navigators/AuthStack';
import SecureTextInput from '../../../components/common/SecureTextInput/SecureTextInput';
import { useDispatch } from '../../../redux/store';
import { actions as authActions } from '../../../redux/slices/auth';

type Props = NativeStackScreenProps<AuthStackParamList, 'SIGN_IN_SCREEN'>;

const SignInScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('auth');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignUp = () => {
    navigation.navigate('SIGN_UP_SCREEN');
  };
  const onSignInButtonPress = () => {
    //TODO ADD VALIDATION
    dispatch(authActions.signIn({ email: email, password: password }));
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
    marginBottom: 26,
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
