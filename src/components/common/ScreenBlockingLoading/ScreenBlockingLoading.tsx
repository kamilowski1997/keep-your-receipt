import React from 'react';
import { Modal, View, ModalProps, StyleSheet } from 'react-native';
import Loader from '../Loader/Loader';

interface ScreenBlockerProps extends ModalProps {
  withLoader?: boolean;
}

const ScreenBlocker = ({ style, withLoader, ...props }: ScreenBlockerProps) => (
  <Modal animationType="fade" transparent={true} {...props}>
    <View style={[styles.container, style]}>{withLoader && <Loader />}</View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF88',
  },
});

export default ScreenBlocker;
