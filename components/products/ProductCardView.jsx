import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({product}) => {
    const navigation = useNavigation("ProductDetails");
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {product})}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri: product.imageUrl}}
                style={styles.image} />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                <Text style={styles.supplier} numberOfLines={1}>{product.supplier}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

