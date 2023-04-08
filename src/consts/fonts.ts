import { RFValue } from 'react-native-responsive-fontsize';
//ADD FONTS
export enum DefaultFont {}

export const getDynamicFontSize = (requestedFontSize: number) =>
  RFValue(requestedFontSize, 760);
