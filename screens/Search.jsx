import { Text, View } from "react-native";
import React from "react";
import styles from "./search.style";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { Image } from "react-native";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const hadleSearch = async () =>{
    try {
      const response = await axios.get(`http://192.168.3.33:3000/api/products/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.log('failed to load products')
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
              name="camera-outline"  size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => hadleSearch()}>
            <Feather name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image source={require('../assets/images/Pose23.png')} style={styles.searchImage}/>
        </View>
      ) : (
        <FlatList 
          data={searchResults} 
          keyExtractor={(item) => item._id}
          style={{marginHorizontal: 12}}
          renderItem={({item}) => (<SearchTile product={item} />)}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;


