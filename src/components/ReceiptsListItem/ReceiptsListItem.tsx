import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Receipt } from '../../utils/interfaces/receipts';
import { colors } from '../../consts/colors';
import { DefaultFont, getDynamicFontSize } from '../../consts/fonts';
import { ShopIcon } from '../../assets/icons';
import NoImagePlaceholder from '../NoImagePlaceholder/NoImagePlaceholder';
import dayjs from 'dayjs';
import AppText from '../common/AppText/AppText';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: Receipt;
};

const ReceiptsListItem = ({ item }: Props) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('EDIT_RECEIPT_SCREEN');
      }}>
      <NoImagePlaceholder />
      <View style={styles.mainSection}>
        <View style={styles.infoColumn}>
          <AppText style={styles.nameText}>{item.name}</AppText>
          <View style={styles.shopRow}>
            <View style={styles.shopIconWrapper}>
              <Image style={styles.shopIcon} source={ShopIcon} />
            </View>
            <AppText style={styles.shopText}>{item.shop}</AppText>
          </View>
        </View>
        <AppText style={styles.purchaseDateText}>
          {dayjs(item.purchaseDate).format('DD/MM/YYYY')}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default ReceiptsListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  mainSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 12,
  },
  nameText: {
    fontFamily: DefaultFont.w600,
    color: colors.black,
    fontSize: getDynamicFontSize(16),
    lineHeight: getDynamicFontSize(19),
    marginBottom: 11,
  },
  shopText: {
    fontFamily: DefaultFont.w400,
    color: colors.black,
    fontSize: getDynamicFontSize(12),
    lineHeight: getDynamicFontSize(14),
  },
  shopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  shopIconWrapper: {
    height: 16,
    width: 16,
    marginRight: 6,
  },
  shopIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  infoColumn: {
    flex: 1,
  },
  purchaseDateText: {
    fontFamily: DefaultFont.w400,
    color: colors.gray03,
    fontSize: getDynamicFontSize(12),
    lineHeight: getDynamicFontSize(14),
  },
});
