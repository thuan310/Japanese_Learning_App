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
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    
    const signUp = async () => {
        setLoading(true)
        try {
            const user = await createUserWithEmailAndPassword(auth, form.email, form.password)
            console.log(user);
            alert('User created successfully')
        }catch (error) {
            console.log(error);
            alert(error.message);
        }finally {
            setLoading(false)
        }
    }

    return (
           
        <ScrollView className=" mx-4">
            <Image
                source={images.banner}
                className="h-[230px] w-full mt-4 rounded-lg"
                resizeMode='contain'
            />
            <View className="w-full justify-center px-4 ">
            
                <InputField
                    title="Username"
                    value={form.username}
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    otherStyles="mt-7"
                />

                <InputField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-4"
                    keyboardType="email-address"
                />
                <InputField
                    title="Password"
                    value={form.password }
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-4"
                />

                <Button 
                    title="Sign up"
                    handlePress={signUp}
                    containerStyles="mt-7"
                />

                <View className="flex-row justify-center pt-5 gap-2">
                    <Text className="text-base font-pmedium">Already have an account?</Text>
                    <Link href="(auth)/signIn" className="text-primary text-base font-medium ml-1">Sign in</Link>
                </View>

            </View>
        </ScrollView>
        
    )
}

export default SignUp