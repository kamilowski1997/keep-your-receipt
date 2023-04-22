import { t } from 'i18next';

export const validateSignIn = (email: string, password: string) => {
  const errors = {
    email: '',
    password: '',
  };

  if (!validateEmail(email)) {
    errors.email = t('auth:errors.emailAddressIsIncorrect');
  }
  if (!validatePassword(password)) {
    errors.password = t('auth:errors.passwordIsTooShort');
  }

  return errors;
};

export const validateSignUp = (
  email: string,
  password: string,
  repeatPassword: string,
) => {
  const errors = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  if (!validateEmail(email)) {
    errors.email = t('auth:errors.emailAddressIsIncorrect');
  }
  if (!validatePassword(password)) {
    errors.password = t('auth:errors.passwordIsTooShort');
  }
  if (validateRepeatPassword(password, repeatPassword)) {
    errors.repeatPassword = t('auth:errors.passwordsDoNotMatch');
  }

  return errors;
};

export const validateEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  return password.length >= 6;
};

export const validateRepeatPassword = (
  password: string,
  repeatPassword: string,
) => {
  return password !== repeatPassword;
};
