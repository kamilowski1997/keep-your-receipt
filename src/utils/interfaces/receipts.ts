import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type Receipt = {
  id: string;
  uid: string;
  name: string;
  shop: string;
  purchaseDate: string;
};

export type ReceiptFirebaseDTO = {
  uid: string;
  name: string;
  shop: string;
  purchaseDate: FirebaseFirestoreTypes.Timestamp;
};
