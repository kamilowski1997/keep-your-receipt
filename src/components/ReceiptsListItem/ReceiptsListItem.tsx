import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ReceiptsListItemProps } from '../../utils/interfaces/receipts';
import { colors } from '../../consts/colors';
import { DefaultFont, getDynamicFontSize } from '../../consts/fonts';
import { ShopIcon } from '../../assets/icons';
import dayjs from 'dayjs';

type Props = {
  item: ReceiptsListItemProps;
};

const ReceiptsListItem = ({ item }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* TODO CHANGE IMAGE PLACEHOLDER */}
      <View style={styles.image} />
      <View style={styles.mainSection}>
        <View style={styles.infoColumn}>
          <Text style={styles.nameText}>{item.name}</Text>
          <View style={styles.shopRow}>
            <View style={styles.shopIconWrapper}>
              <Image style={styles.shopIcon} source={ShopIcon} />
            </View>
            <Text style={styles.shopText}>{item.shop}</Text>
          </View>
        </View>
        <Text style={styles.purchaseDateText}>
          {dayjs(item.purchaseDate).format('DD/MM/YYYY')}
        </Text>
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
  image: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginRight: 16,
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
