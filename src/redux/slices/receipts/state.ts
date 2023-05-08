import { Receipt } from '../../../utils/interfaces/receipts';

type ReceiptsState = {
  receiptsList: Receipt[];
  getReceiptsListState: { loading: boolean; success?: boolean; error?: string };
};

export type { ReceiptsState };
