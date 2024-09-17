import { View, Text } from 'react-native'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen
        name="sign-in"
        oprtions={{
            headerShown:false
        }}
        />
          <Stack.Screen
        name="sign-up"
        oprtions={{
            headerShown:false
        }}
        />
    </Stack>

    <StatusBar backgroundColor="#161622"
    style="light" />
    </>   
  )
}

export default AuthLayout