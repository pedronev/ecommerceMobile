import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../constants'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons"

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setuserLogin] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray}/>
        <View style={{width: '100%'}}>
          <Image 
            style={styles.cover}
            source={require('../assets/images/space.jpg')}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image 
            style={styles.profile}
            source={require('../assets/images/profile.jpeg')}
          />
          <Text style={styles.name}>
            {userLogin ? userData.name: "Please login "}
          </Text>
          {!userLogin ? (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles}>
                <Text style={styles.menuWrapper}>
                  <TouchableOpacity onPress={() =>{}}>
                    <View style={styles.menuItem(0.2)}>
                      <MaterialCommunityIcons 
                        name='heart-outline'
                        size={24}
                        color={COLORS.primary}
                      />
                      
                    </View>
                    LOGIN@test.com
                  </TouchableOpacity>
                </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile

