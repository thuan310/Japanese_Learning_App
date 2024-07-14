import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import images from '../../constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';
import SoundButton from '../../components/SoundButton';

const WordDetail = () => {
    const {item} = useLocalSearchParams()
    const word = item ? JSON.parse(item) : null

    return (
        <ScrollView className="p-5">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-2xl font-bold">{word.word}</Text>
                    <Text className="text-lg text-gray-600">{word.reading}</Text>
                </View>
                <SoundButton
                    soundFile= {require('../../assets/sound/neko.mp3')}
                />
            </View>

            {word.meanings.map((meaning, index) => (
                <Text key={index} className="text-lg mt-2">{meaning}</Text>
            ))}
            <Text className="text-xl font-bold mt-5">Examples</Text>
            {word.examples.map((example, index) => (
                <View key={index} className="mt-4">
                    <Text className="text-base">{example.example}</Text>
                    <Text className="text-sm text-gray-600">{example.meaning}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default WordDetail