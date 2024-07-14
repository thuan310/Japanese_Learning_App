import { StyleSheet, Text, View } from 'react-native'
import { Splash, SplashScreen, Stack, router,  } from 'expo-router'
import { useEffect } from 'react';
import { useState } from 'react';
import { onAuthStateChanged, } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebase.config';


const RootLayout = () => {

  const [user, setUser] = useState(null)
  auth = FIREBASE_AUTH

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        router.replace('/(tabs)/learn')
      }
    })
  }, [])  

  return (
    
      <Stack>
        <Stack.Screen name="index" options ={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options ={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options ={{ headerShown: false}} />
        <Stack.Screen name="course" options ={{ headerShown: false }} />
        <Stack.Screen name="detail" options ={{ headerShown: false }} />
        <Stack.Screen name="chapter" options ={{ headerShown: false }} />
        <Stack.Screen name="flashCard" options ={{ headerShown: false }} />
      </Stack>  

  )
}
      //<Stack.Screen name="/search/[query]" options ={{ headerShown: false}} />
export default RootLayout
