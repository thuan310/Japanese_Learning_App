import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH } from '../../firebase.config'
import { router } from 'expo-router'

const signOut = () => {
  return (
    <SafeAreaView>
      <Button 
        title="Sign Out" 
        handlePress={() => {
            FIREBASE_AUTH.signOut()
            router.replace('signIn')
        }}
      />
    </SafeAreaView>
  )
}

export default signOut