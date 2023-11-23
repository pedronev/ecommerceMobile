import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';
import { useRoute } from '@react-navigation/native';

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {product} = route.params;
  const [count, setCount] = useState(1)
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart-outline' size={30} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: product.imageUrl}}
      style={styles.image} />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceWrapper}>
          <Text style={styles.price}>{product.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((i) => (
              <Ionicons key={i} name='star' size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={()=> count > 1 ? setCount(count - 1): ''}>
                <SimpleLineIcons name='minus' size={20}/>
              </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={()=> setCount(count + 1)}>
                <SimpleLineIcons name='plus' size={20}/>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Description
          </Text>
          <Text style={styles.descText}>
            {product.description}
             </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
            <Ionicons name='location-outline' size={20} />
            <Text>{product.product_location}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
            <Text>Free Delivery</Text>
            </View>
          </View>
        </View>

              <View style={styles.cartRow}>
                <TouchableOpacity style={styles.cartBtn} onPress={() =>{}}>
                  <Text style={styles.cartText}>BUY NOW</Text>
                </TouchableOpacity>

                  <TouchableOpacity style={styles.cartBtn} onPress={() =>{}}>
                    <Fontisto name='shopping-bag' size={20} color={COLORS.lightWhite} />
                </TouchableOpacity>
              </View>
      </View>
    </View>
  )
}

export default ProductDetails

