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
import AddNewButton from '../../../components/AddNewButton/AddNewButton';

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

  const onReceiptsListRefresh = () => {
    dispatch(receiptsActions.getReceiptsList());
  };

  return (
    <View style={styles.container}>
      <ReceiptsList
        receiptsList={receiptsList}
        refreshing={getReceiptsListState.loading}
        onRefresh={onReceiptsListRefresh}
      />
      <AddNewButton
      // TODO ADD ONPRESS onPress={() => {}}
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
