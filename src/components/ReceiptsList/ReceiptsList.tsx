import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReceiptsListItem from '../ReceiptsListItem/ReceiptsListItem';
import { Receipt } from '../../utils/interfaces/receipts';
import { colors } from '../../consts/colors';
import AppText from '../common/AppText/AppText';
import { DefaultFont, getDynamicFontSize } from '../../consts/fonts';

type Props = {
  receiptsList: Receipt[];
  refreshing?: boolean;
  onRefresh?: () => void;
};

const ReceiptsList = ({
  receiptsList,
  refreshing,
  onRefresh = () => {},
}: Props) => {
  const { t: receiptsListT } = useTranslation('dashboard', {
    keyPrefix: 'receiptsList',
  });

  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <View
      style={styles.container}
      onLayout={event => {
        setContainerHeight(event.nativeEvent.layout.height);
      }}>
      <FlatList
        data={receiptsList}
        renderItem={ReceiptsListItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={!!refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
        contentContainerStyle={
          receiptsList.length ? styles.flatListContentContainer : {}
        }
        ListEmptyComponent={
          refreshing ? (
            <View />
          ) : (
            <View
              style={StyleSheet.flatten([
                styles.emptyListPlaceholderContainer,
                { height: containerHeight },
              ])}>
              <AppText style={styles.emptyListPlaceholderText1}>
                {receiptsListT('listIsEmpty')}
              </AppText>
              <AppText style={styles.emptyListPlaceholderText2}>
                {receiptsListT('addYourFirstReceipt')}
              </AppText>
              <AppText style={styles.emptyListPlaceholderText1}>
                {receiptsListT('orPullDownToRefreshList')}
              </AppText>
            </View>
          )
        }
      />
    </View>
  );
};

export default ReceiptsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    paddingBottom: 100,
  },
  emptyListPlaceholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListPlaceholderText1: {
    fontFamily: DefaultFont.w500,
    fontSize: getDynamicFontSize(14),
    lineHeight: getDynamicFontSize(24),
    color: colors.black,
  },
  emptyListPlaceholderText2: {
    fontFamily: DefaultFont.w700,
    fontSize: getDynamicFontSize(14),
    lineHeight: getDynamicFontSize(24),
    color: colors.primary,
  },
});
