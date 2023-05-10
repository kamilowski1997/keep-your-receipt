import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';

const EditReceiptScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EditReceiptScreen</Text>
    </View>
  );
};

export default EditReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    backgroundColor: colors.white,
  },
});
