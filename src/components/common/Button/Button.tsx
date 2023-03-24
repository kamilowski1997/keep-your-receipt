import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';

export interface ButtonProps extends PaperButtonProps {
  wrapperStyle?: ViewStyle;
}

const Button = ({ wrapperStyle, ...props }: ButtonProps) => {
  return (
    <View style={StyleSheet.compose(styles.buttonWrapper, wrapperStyle)}>
      <PaperButton {...props} />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});
