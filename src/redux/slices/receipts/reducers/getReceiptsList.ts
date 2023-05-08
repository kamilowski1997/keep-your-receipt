import { PayloadAction } from '@reduxjs/toolkit';
import { ReceiptsState } from '../state';
import { Receipt } from '../../../../utils/interfaces/receipts';

export const initGetReceiptsList = (state: ReceiptsState) => {
  state.getReceiptsListState = { loading: true };
};

export const clearGetReceiptsList = (state: ReceiptsState) => {
  state.getReceiptsListState = { loading: false };
};

export const getReceiptsListSuccess = (
  state: ReceiptsState,
  action: PayloadAction<Receipt[]>,
) => {
  state.getReceiptsListState = { loading: false, success: true };
  state.receiptsList = action.payload;
};

export const getReceiptsListError = (
  state: ReceiptsState,
  action: PayloadAction<string>,
) => {
  state.getReceiptsListState = {
    loading: false,
    success: false,
    error: action.payload,
  };
};

export const setReceiptsList = (
  state: ReceiptsState,
  action: PayloadAction<Receipt[]>,
) => {
  state.receiptsList = action.payload;
};
