import firestore from '@react-native-firebase/firestore';
import { ReceiptFirebaseDTO } from '../../utils/interfaces/receipts';
import { mapReceiptFirebaseDocToReceipt } from './mappers/receipts';
import { UserDetailsType } from '../../utils/interfaces/auth';

export const getReceiptsListFromFirestore = (uid: UserDetailsType['id']) =>
  firestore()
    .collection<ReceiptFirebaseDTO>('receipts')
    .where('uid', '==', uid)
    .orderBy('purchaseDate', 'desc')
    .get()
    .then(receiptsSnapshot =>
      receiptsSnapshot.docs.map(mapReceiptFirebaseDocToReceipt),
    );
