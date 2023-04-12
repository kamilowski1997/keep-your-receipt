import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';

export interface ButtonProps extends PaperButtonProps {
  wrapperStyle?: ViewStyle;
  style?: PaperButtonProps['style'];
  labelStyle?: PaperButtonProps['labelStyle'];
}

const Button = ({ wrapperStyle, style, labelStyle, ...props }: ButtonProps) => {
  return (
    <View style={StyleSheet.compose(styles.buttonWrapper, wrapperStyle)}>
      <PaperButton
        labelStyle={StyleSheet.compose(styles.label, labelStyle)}
        style={StyleSheet.compose(styles.button, style)}
        {...props}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontFamily: DefaultFont.w600,
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
    marginVertical: 16,
  },
  button: {
    borderRadius: 100,
  },
});
