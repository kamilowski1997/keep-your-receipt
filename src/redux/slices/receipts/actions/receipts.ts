import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../index';
import { RootState } from '../../../store';
import { getReceiptsListFromFirestore } from '../../../../services/firestore/receipts';

const getReceiptsList = createAsyncThunk<void, void, { state: RootState }>(
  'receipts/getAllList',
  async (payload, thunkApi) => {
    try {
      thunkApi.dispatch(actions.initGetReceiptsList());

      const currentState = thunkApi.getState();

      // await new Promise<void>(resolve => {
      //   setTimeout(resolve, 2000);
      // });
      const receiptsList = currentState.auth.user?.id
        ? await getReceiptsListFromFirestore(currentState.auth.user?.id)
        : [];

      // const receiptsList = mockedReceiptsList.slice();
      // const sortedReceiptsList = receiptsList.sort((a, b) =>
      //   dayjs(b.purchaseDate).diff(a.purchaseDate),
      // );

      thunkApi.dispatch(actions.getReceiptsListSuccess(receiptsList));
    } catch (error: any) {
      console.error(error);
      thunkApi.dispatch(
        actions.getReceiptsListError(error.response?.data || 'unknown error'),
      );
      throw error;
    }
  },
);

export { getReceiptsList };
