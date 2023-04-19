import React from 'react';
import auth from '@react-native-firebase/auth';
import { IconButton, Tooltip } from 'react-native-paper';
import { colors } from '../../../consts/colors';
import { useTranslation } from 'react-i18next';

const LogoutButton = () => {
  const { t: tooltipT } = useTranslation('common', {
    keyPrefix: 'tooltip',
  });

  return (
    <Tooltip
      title={tooltipT('logout')}
      theme={{ colors: { onSurface: colors.primary, surface: colors.white } }}>
      <IconButton
        icon="logout-variant"
        size={28}
        iconColor={colors.primary}
        onPress={() => {
          auth().signOut();
        }}
      />
    </Tooltip>
  );
};

export default LogoutButton;
