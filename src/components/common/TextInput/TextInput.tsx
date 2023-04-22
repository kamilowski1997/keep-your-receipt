import React from 'react';
import {
  HelperText,
  TextInput as PaperTextInput,
  TextInputProps as PaperTextInputProps,
} from 'react-native-paper';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';

export interface TextInputProps extends PaperTextInputProps {
  helperText?: string;
  helperTextType?: 'error' | 'info';
  containerStyle?: ViewStyle;
}

const TextInput = ({
  style,
  helperText,
  helperTextType = 'error',
  containerStyle,
  ...props
}: TextInputProps) => {
  return (
    <View style={containerStyle}>
      <PaperTextInput
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

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
  },
});
