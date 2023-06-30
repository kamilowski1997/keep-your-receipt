import React from 'react';
import { HelperText } from 'react-native-paper';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';
import { DatePickerInput as PaperDatePickerInput } from 'react-native-paper-dates';
import { DatePickerInputProps as PaperDatePickerInputProps } from 'react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared';

export interface DatePickerInputProps extends PaperDatePickerInputProps {
  helperText?: string;
  helperTextType?: 'error' | 'info';
  containerStyle?: ViewStyle;
}

const DatePickerInput = ({
  style,
  helperText,
  helperTextType = 'error',
  containerStyle,
  ...props
}: DatePickerInputProps) => {
  return (
    <View style={containerStyle}>
      <PaperDatePickerInput
        theme={{
          fonts: {
            bodyLarge: {
              fontFamily: DefaultFont.w500,
            },
          },
        }}
        style={StyleSheet.compose(styles.textInput, style)}
        {...props}
      />

      {helperText && (
        <HelperText type={helperTextType}>{helperText}</HelperText>
      )}
    </View>
  );
};

export default DatePickerInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
  },
});
