import { createSelector } from '@reduxjs/toolkit';
import { selectState } from '../slice';
import { ReceiptsState } from '../state';

const selectReceiptsList = createSelector(
  selectState,
  (state: ReceiptsState) => state.receiptsList,
);

const selectGetReceiptsListState = createSelector(
  selectState,
  (state: ReceiptsState) => state.getReceiptsListState,
);

export { selectReceiptsList, selectGetReceiptsListState };
