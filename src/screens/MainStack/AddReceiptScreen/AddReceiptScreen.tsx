import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';
import TextInput from '../../../components/common/TextInput/TextInput';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/common/Button/Button';

const AddReceiptScreen = () => {
  const { t } = useTranslation('receipt');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.formScrollViewContentContainer}
          showsVerticalScrollIndicator={false}>
          <TextInput
            mode="outlined"
            label={t('placeholders.name')}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.purchaseDate')}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.shop')}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.daysForReturn')}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.yearsOfWarranty')}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.description')}
            multiline
            numberOfLines={5}
            // value={email}
            // onChangeText={setEmail}
            containerStyle={styles.textInput}
            // helperText={errors.email}
            // error={errors.email !== ''}
            // onFocus={clearError('email')}
          />
        </ScrollView>
        <Button
          mode={'contained'}
          // onPress={onSignInButtonPress}
          // loading={signInState.loading}
          disabled
          style={styles.saveButton}>
          {t('save')}
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    backgroundColor: colors.white,
  },
  textInput: {
    width: '100%',
    marginBottom: 26,
  },
  saveButton: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  formScrollViewContentContainer: {
    paddingBottom: 80,
  },
});
