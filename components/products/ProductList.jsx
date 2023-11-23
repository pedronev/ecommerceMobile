import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { FlatList } from 'react-native';
import ProductCardView from './ProductCardView';
import styles from './productList.style';

const ProductList = () => {
    const {data, isLoading, error} = useFetch();

    if(isLoading) {
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList data={data} numColumns={2} renderItem={({item}) => (<ProductCardView product={item}/>)} 
            contentContainerStyle={styles.container2}
            ItemSeparatorComponent={() => <View style={styles.separator}/> } />
    </View>
  )
}

export default ProductList

