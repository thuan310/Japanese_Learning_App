import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import images from '../../constants/images'
import icons from '../../constants/icons'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { router, Link } from 'expo-router'
import { FIREBASE_AUTH } from '../../firebase.config'
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword} from 'firebase/auth'


const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
      })

    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const signIn = async () => {
        setLoading(true)
        try {
            const user = await signInWithEmailAndPassword(auth, form.email, form.password)
            
        }catch (error) {
            console.log(error);
            alert(error.message)
        }finally {
            setLoading(false)
        }
    }


    return (
        <ScrollView className=" mx-4 "> 
            <Image
                source={images.banner}
                className="h-[230px] w-full mt-4 rounded-lg"
                resizeMode='contain'
            />
            <View className="w-full justify-center px-4">
                <InputField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />
                <InputField
                    title="Password"
                    value={form.password }
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-4"
                />

                <Button 
                    title="Sign in"
                    handlePress={signIn}
                    containerStyles="mt-7"
                />

                <View className="flex-row justify-center pt-5 gap-2">
                    <Text className="text-base font-pmedium">Don't have an account?</Text>
                    <Link href="/signUp" className="text-primary text-base font-medium ml-1">Sign up</Link>
                </View>

            </View>
        </ScrollView>
        
    )
}

export default SignIn