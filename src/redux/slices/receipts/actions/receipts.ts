import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../index';
import { mockedReceiptsList } from '../../../../consts/mocks/receiptsList';
import dayjs from 'dayjs';

const getReceiptsList = createAsyncThunk(
  'receipts/getAllList',
  async (payload, thunkApi) => {
    try {
      thunkApi.dispatch(actions.initGetReceiptsList());

      await new Promise<void>(resolve => {
        setTimeout(resolve, 2000);
      });

      const receiptsList = mockedReceiptsList;
      receiptsList.sort((a, b) => dayjs(b.purchaseDate).diff(a.purchaseDate));

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
