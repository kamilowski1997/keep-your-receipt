import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { colors } from '../../consts/colors';
import { PlusIcon } from '../../assets/icons';

interface AddNewButtonProps extends TouchableOpacityProps {}

const AddNewButton = ({ ...props }: AddNewButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image source={PlusIcon} style={styles.plusIcon} />
    </TouchableOpacity>
  );
};

export default AddNewButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    width: 72,
    aspectRatio: 1,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 18,
  },
  plusIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
