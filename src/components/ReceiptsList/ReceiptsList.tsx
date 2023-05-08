import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React from 'react';
import ReceiptsListItem from '../ReceiptsListItem/ReceiptsListItem';
import { Receipt } from '../../utils/interfaces/receipts';
import { colors } from '../../consts/colors';

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
  return (
    <View style={styles.container}>
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
        contentContainerStyle={styles.flatListContentContainer}
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
});
