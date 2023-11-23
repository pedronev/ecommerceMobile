import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, NewArrivals, ProductDetails } from './screens';

//SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'ligh': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} options={{headerShown:false}} />
        <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}} />
        <Stack.Screen name='ProductList' component={NewArrivals} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

