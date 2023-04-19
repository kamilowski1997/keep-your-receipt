import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/src/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppText from '../AppText/AppText';
import { getDynamicFontSize } from '../../../consts/fonts';
import { colors } from '../../../consts/colors';
import NavigationBackButton from '../NavigationBackButton/NavigationBackButton';

const NavigationHeaderComponent = ({
  options,
  navigation,
  back,
}: NativeStackHeaderProps) => {
  const { top } = useSafeAreaInsets();
  const { title, headerRight, headerTitle, headerTitleStyle } = options;

  const headerTitleComponent = useMemo(() => {
    if (!headerTitle) {
      return (
        <AppText
          style={StyleSheet.flatten([
            headerTitleStyle,
            { lineHeight: getDynamicFontSize(36) },
          ])}>
          {title}
        </AppText>
      );
    }
    if (typeof headerTitle === 'string') {
      return (
        <AppText
          style={StyleSheet.flatten([
            headerTitleStyle,
            { lineHeight: getDynamicFontSize(36) },
          ])}>
          {headerTitle}
        </AppText>
      );
    }
    return headerTitle({ children: title || '' });
  }, [headerTitle, headerTitleStyle, title]);

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View style={styles.headerLeftContainer}>
        <NavigationBackButton canGoBack={!!back} />
      </View>
      <View style={styles.headerCenterContainer}>{headerTitleComponent}</View>
      <View style={styles.headerRightContainer}>
        {headerRight?.({ canGoBack: navigation.canGoBack() })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerLeftContainer: {
    width: '16%',
  },
  headerCenterContainer: {
    width: '68%',
    alignItems: 'center',
  },
  headerRightContainer: {
    width: '16%',
    alignItems: 'center',
  },
});

export default React.memo(NavigationHeaderComponent);
