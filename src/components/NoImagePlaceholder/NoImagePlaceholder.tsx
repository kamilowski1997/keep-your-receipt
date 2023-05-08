import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../../consts/colors';
import { NoImageIcon } from '../../assets/icons';

const NoImagePlaceholder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noImageIconWrapper}>
        <Image style={styles.noImageIcon} source={NoImageIcon} />
      </View>
    </View>
  );
};

export default NoImagePlaceholder;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageIconWrapper: {
    height: 30,
    width: 30,
  },
  noImageIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
