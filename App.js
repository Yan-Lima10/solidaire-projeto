// ANTIGO
// import { StyleSheet, Text, View } from 'react-native';
// import SplashScreen from './components/splashScreen'
// import HomeScreen from './components/homeScreen';
// import React, { useState, useEffect } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Routes from './src/routes';

// export default function App() {
//   const [isShowSplash, setIsShowSplash] = useState(true);
//   const Stack = createStackNavigator();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsShowSplash(false);
//     }, 3000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isShowSplash ? <SplashScreen /> : <HomeScreen />}
//     </>
//   );
// }


import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';
import HomeScreen from './components/homeScreen';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './src/routes';
import RegisterScreen from './components/registerScreen';
import ResetPassword from './components/resetPassword';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isShowSplash ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Routes" component={Routes} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import Routes from './src/routes'

// import {NavigationContainer} from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   return (
//     <NavigationContainer>
//     <Routes/>
//     </NavigationContainer>
//   );
// }