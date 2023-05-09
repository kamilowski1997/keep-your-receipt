import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import {
  Receipt,
  ReceiptFirebaseDTO,
} from '../../../utils/interfaces/receipts';

export const mapReceiptFirebaseDocToReceipt = (
  receiptDoc: FirebaseFirestoreTypes.QueryDocumentSnapshot<ReceiptFirebaseDTO>,
) =>
  ({
    ...receiptDoc.data(),
    id: receiptDoc.id,
    purchaseDate: receiptDoc.data().purchaseDate.toDate().toISOString(),
  } as Receipt);
