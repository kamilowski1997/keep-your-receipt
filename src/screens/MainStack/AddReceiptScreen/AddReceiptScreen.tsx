import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';

const AddReceiptScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddReceiptScreen</Text>
    </View>
  );
};

export default AddReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    backgroundColor: colors.white,
  },
});
