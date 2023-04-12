import React from 'react';
import {
  TextInput as PaperTextInput,
  TextInputProps as PaperTextInputProps,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';

export interface TextInputProps extends PaperTextInputProps {}

const TextInput = ({ style, ...props }: TextInputProps) => {
  return (
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
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
  },
});
