import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import * as reducers from './reducers';
import { ReceiptsState } from './state';

type Reducers = typeof reducers;

const initialState: ReceiptsState = {
  receiptsList: [],
  getReceiptsListState: { loading: false },
};

export const receiptsSliceName = 'receipts';

const slice = createSlice<
  ReceiptsState,
  Reducers & { reset: () => ReceiptsState }
>({
  name: receiptsSliceName,
  initialState,
  reducers: {
    ...reducers,
    reset: () => initialState,
  },
});

export const { actions, reducer } = slice;

export const selectState = (state: RootState) => state[receiptsSliceName];
