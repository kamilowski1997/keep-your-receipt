import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../index';
import { mockedReceiptsList } from '../../../../consts/mocks/receiptsList';

const getReceiptsList = createAsyncThunk(
  'receipts/getAllList',
  async (payload, thunkApi) => {
    try {
      thunkApi.dispatch(actions.initGetReceiptsList());

      await new Promise<void>(resolve => {
        setTimeout(resolve, 2000);
      });

      const receiptsList = mockedReceiptsList;

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
