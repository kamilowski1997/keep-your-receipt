import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import ReceiptsListItem from '../ReceiptsListItem/ReceiptsListItem';
import { mockedReceiptsList } from '../../consts/mocks/receiptsList';

const ReceiptsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockedReceiptsList}
        renderItem={ReceiptsListItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ReceiptsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
