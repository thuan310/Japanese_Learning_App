import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import images from '../constants/images'
const Header = () => {
  return (
    <View className = "bg-primary items-center flex-row pt-16">
        <StatusBar barStyle="light-content" />
        <Image
            source={images.pfp}
            resizeMode='contain'
            className ="h-[60px] w-[60px] rounded-full mx-5 mb-5"
        />
        <View>
            <Text className = "text-white text-lg ">Welcome back,</Text>
            <Text className = "text-white mb-4 text-2xl font-semibold">Thuan</Text>
        </View>

    </View>
  )
}

export default Header