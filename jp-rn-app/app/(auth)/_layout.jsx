import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Auth = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="signIn"
          options={{
            title: "Sign In",
            headerStyle:{
              backgroundColor: '#F1063E',
              height: 500
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible: false
          }}
        />

        <Stack.Screen
          name="signUp"
          options={{
            title: "Sign up",
            headerStyle:{
              backgroundColor: '#F1063E',
              height: 500
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible: false
          }}
        />

      </Stack>

      <StatusBar backgroundColor="#161622" style='light'/>
    </>
  )
}

export default Auth