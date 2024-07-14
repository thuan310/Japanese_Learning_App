import { Pressable } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av';

const SoundButton = ({soundFile, containerStyles}) => {

    const [sound, setSound] = useState();

    useEffect(() => {
        return sound
        ? () => {
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);

    async function playSound(soundfile) {
        const { sound } = await Audio.Sound.createAsync(soundfile)
        setSound(sound);
        await sound.playAsync();
    }


    return (
        <Pressable
            onPress={()=>playSound(soundFile)}
            className={`bg-primary active:bg-red-600 py-2 px-2 rounded-md ${containerStyles}`}
        >
            <AntDesign name="sound" size={24} color="white" />
        </Pressable>
    )
}

export default SoundButton