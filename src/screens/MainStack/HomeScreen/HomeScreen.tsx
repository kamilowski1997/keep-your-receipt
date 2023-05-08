import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainStackParamList } from '../../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { defaultHorizontalMargin } from '../../../consts/sizes';
import { colors } from '../../../consts/colors';
import ReceiptsList from '../../../components/ReceiptsList/ReceiptsList';
import {
  actions as receiptsActions,
  selectors as receiptsSelectors,
} from '../../../redux/slices/receipts';
import { useDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';

type Props = NativeStackScreenProps<MainStackParamList, 'HOME_SCREEN'>;

const HomeScreen = ({}: Props) => {
  const dispatch = useDispatch();

  const getReceiptsListState = useSelector(
    receiptsSelectors.selectGetReceiptsListState,
  );
  const receiptsList = useSelector(receiptsSelectors.selectReceiptsList);

  useEffect(() => {
    dispatch(receiptsActions.getReceiptsList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ReceiptsList
        receiptsList={receiptsList}
        refreshing={getReceiptsListState.loading}
        onRefresh={() => dispatch(receiptsActions.getReceiptsList())}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultHorizontalMargin,
    backgroundColor: colors.white,
    paddingTop: 12,
  },
});
