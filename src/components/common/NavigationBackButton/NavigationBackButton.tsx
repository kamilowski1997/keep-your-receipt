import React from 'react';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { IconButton, Tooltip } from 'react-native-paper';
import { colors } from '../../../consts/colors';
import { useTranslation } from 'react-i18next';

const NavigationBackButton = ({ canGoBack }: HeaderBackButtonProps) => {
  const { goBack } = useNavigation();
  const { t: tooltipT } = useTranslation('common', {
    keyPrefix: 'tooltip',
  });

  return canGoBack ? (
    <Tooltip
      title={tooltipT('return')}
      theme={{ colors: { onSurface: colors.primary, surface: colors.white } }}>
      <IconButton
        icon="keyboard-backspace"
        size={28}
        iconColor={colors.primary}
        onPress={goBack}
      />
    </Tooltip>
  ) : (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default NavigationBackButton;
