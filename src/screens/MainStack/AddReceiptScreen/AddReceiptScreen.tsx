import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';
import TextInput from '../../../components/common/TextInput/TextInput';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/common/Button/Button';
import { getDeviceLocaleShortCode } from '../../../utils/getDeviceLocales';
import DatePickerInput from '../../../components/common/DatePickerInput/DatePickerInput';
import Checkbox from '../../../components/common/Checkbox/Checkbox';
import { setInputStateWithNumericOnlyValidation } from '../../../utils/validators/inputs';

const AddReceiptScreen = () => {
  const { t } = useTranslation('receipt');

  const [name, setName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>(
    dayjs().toDate(),
  );
  const [shop, setShop] = useState('');
  const [daysForReturn, setDaysForReturn] = useState('');
  const [yearsOfWarranty, setYearsOfWarranty] = useState('');
  const [description, setDescription] = useState('');
  const [returnChecked, setReturnChecked] = useState(false);
  const [warrantyChecked, setWarrantyChecked] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    purchaseDate: '',
    shop: '',
    daysForReturn: '',
    yearsOfWarranty: '',
    description: '',
  });

  const clearError = (inputName: string) => () => {
    setErrors(current => {
      return { ...current, [inputName]: '' };
    });
  };

  const onSubmitButtonPress = () => {
    console.log('submit');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.formScrollViewContentContainer}
          showsVerticalScrollIndicator={false}>
          <TextInput
            mode="outlined"
            label={t('placeholders.name')}
            value={name}
            onChangeText={setName}
            containerStyle={styles.textInput}
            helperText={errors.name}
            error={errors.name !== ''}
            onFocus={clearError('name')}
          />
          <DatePickerInput
            locale={getDeviceLocaleShortCode()}
            label={t('placeholders.purchaseDate')}
            value={purchaseDate}
            onChange={d => setPurchaseDate(d)}
            inputMode="start"
            mode="outlined"
            helperText={errors.purchaseDate}
            error={errors.purchaseDate !== ''}
            onFocus={clearError('purchaseDate')}
            containerStyle={styles.textInput}
          />

          <TextInput
            mode="outlined"
            label={t('placeholders.shop')}
            value={shop}
            onChangeText={setShop}
            containerStyle={styles.textInput}
            helperText={errors.shop}
            error={errors.shop !== ''}
            onFocus={clearError('shop')}
          />
          <Checkbox
            status={returnChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setReturnChecked(current => !current);
            }}
            label={t('labels.returnCheckbox')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.daysForReturn')}
            value={daysForReturn}
            onChangeText={setInputStateWithNumericOnlyValidation(
              setDaysForReturn,
            )}
            containerStyle={styles.textInput}
            helperText={errors.daysForReturn}
            error={errors.daysForReturn !== ''}
            onFocus={clearError('daysForReturn')}
            disabled={!returnChecked}
            inputMode="decimal"
          />
          <Checkbox
            status={warrantyChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setWarrantyChecked(current => !current);
            }}
            label={t('labels.warrantyCheckbox')}
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.yearsOfWarranty')}
            value={yearsOfWarranty}
            onChangeText={setInputStateWithNumericOnlyValidation(
              setYearsOfWarranty,
            )}
            containerStyle={styles.textInput}
            helperText={errors.yearsOfWarranty}
            error={errors.yearsOfWarranty !== ''}
            onFocus={clearError('yearsOfWarranty')}
            disabled={!warrantyChecked}
            inputMode="decimal"
          />
          <TextInput
            mode="outlined"
            label={t('placeholders.description')}
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
            containerStyle={styles.textInput}
            helperText={errors.description}
            error={errors.description !== ''}
            onFocus={clearError('description')}
          />
        </ScrollView>
        <Button
          mode={'contained'}
          onPress={onSubmitButtonPress}
          // loading={loading}
          // disabled
          style={styles.submitButton}>
          {t('submit')}
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
  submitButton: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  formScrollViewContentContainer: {
    paddingBottom: 80,
  },
});
