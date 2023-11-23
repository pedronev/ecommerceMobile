import {  ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './productRow.style'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
    const {data, isLoading, error} = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>
        {String(error)}
        </Text>
      ) : (
    <FlatList 
    data={data} 
    keyExtractor={(item) => item._id}
    horizontal
    contentContainerStyle={{columnGap: SIZES.xSmall}}
    renderItem={({item}) => (<ProductCardView product={item} />)}
    />
      )}
    </View>
  );
};

export default ProductRow