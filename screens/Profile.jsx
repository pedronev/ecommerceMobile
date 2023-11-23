import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../constants'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

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
            {userLogin ? userData.name: "please logn "}
          </Text>
          {!userLogin ? (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles}>
            
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile

