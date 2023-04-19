import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors } from '../../../consts/colors';
import { DefaultFont, getDynamicFontSize } from '../../../consts/fonts';

const AppText = ({ style, ...props }: TextProps) => (
  <Text style={[styles.text, style]} {...props} />
);

const styles = StyleSheet.create({
  text: {
    fontSize: getDynamicFontSize(14),
    fontFamily: DefaultFont.w400,
    color: colors.black,
  },
});

export default AppText;
