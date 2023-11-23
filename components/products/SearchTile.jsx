import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './searchTile.style'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SearchTile = ({product}) => {
    const navigation = useNavigation()
    console.log(product)
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {product})}>
        <View style={styles.image}>
        <Image source={{uri: product.imageUrl}}  style={styles.productImg}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>
                {product.title}
            </Text>
            <Text style={styles.suppplier}>
                {product.supplier}
            </Text>
            <Text style={styles.suppplier}>
                {product.price}
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile

