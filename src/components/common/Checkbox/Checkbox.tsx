import React from 'react';
import {
  StyleSheet,
  TextProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  CheckboxProps as PaperCheckboxProps,
  Checkbox as PaperCheckbox,
} from 'react-native-paper';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';
import AppText from '../AppText/AppText';
import { colors } from '../../../consts/colors';

export interface CheckboxProps extends PaperCheckboxProps {
  wrapperStyle?: ViewStyle;
  label?: string;
  labelStyle?: TextProps;
}

const Checkbox = ({
  wrapperStyle,
  label,
  labelStyle,
  onPress,
  ...props
}: CheckboxProps) => {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.checkboxWrapper, wrapperStyle)}
      onPress={onPress}>
      <PaperCheckbox {...props} />
      {label && (
        <AppText style={StyleSheet.compose(styles.label, labelStyle)}>
          {label}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: DefaultFont.w500,
    fontSize: getDynamicFontSize(15),
    lineHeight: getDynamicFontSize(19),
    color: colors.gray04,
  },
});
