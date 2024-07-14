import { View, Text, FlatList, Image, Pressable} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Button from '../../components/Button';
import * as Progress from 'react-native-progress'
import SoundButton from '../../components/SoundButton';
import FlipCard from 'react-native-flip-card'


const Card = () => {
    const {item} = useLocalSearchParams()
    const cardItems = item ? JSON.parse(item) : null

    const [progressPercentage, setProgressPercentage] = useState(0)
    const [cards, setCards] = useState(cardItems)
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        const newProgressPercentage = (1-((cards.length) / (cardItems.length))) ;
        setProgressPercentage(newProgressPercentage);
    }, [cards])

 
    const handleWrong = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards]
            newCards.push(newCards.shift())
            return newCards
        })
        setIsFlipped(false)
    }

    const handleCorrect = () => {
        setCards((prevCards) => prevCards.slice(1))
        setIsFlipped(false)
    };


    return (
        <View> 
            
            <Progress.Bar 
                progress={progressPercentage} 
                width={330} color='#F1063E' unfilledColor='#d6d6d6' borderColor='#d6d6d6' 
                className=" self-center mt-4"
            />

            <FlatList 
            data={cards}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
                <View>
                    <FlipCard
                        flipHorizontal={true}
                        flipVertical={false}
                        onFlipStart={()=>{setIsFlipped(true)}}
                    >
                        <View className="w-screen pt-3 px-7">
                            <View className="bg-white px-6 py-6 h-5/6 mx-3 border-[1px] rounded-xl border-gray-200 items-center justify-center flex-col">
                                
                                {item.image && (
                                    <View className="w-full h-2/6">
                                        <Image
                                            source={item.image}
                                            resizeMode='stretch'
                                            className=" w-full h-full border-[1px] rounded-lg border-gray-200"
                                        />
                                    </View>     
                                )}
                                
                                {item.sound && (
                                    <SoundButton 
                                        soundFile={item.sound}
                                        containerStyles={"mt-5"}
                                    />
                                )}
                                <Text className=" text-justify mt-5 font-semibold text-2xl">{item.front}</Text>
                                
                                

                            </View>
                            
                        </View>
                        <View className="w-screen pt-3 px-7">
                            <View className="bg-white px-6 py-6 h-5/6 mx-3 border-[1px] rounded-xl border-gray-200 items-center justify-center flex-col">
                                {item.image && (
                                    <View className="w-full h-2/6">
                                        <Image
                                            source={item.image}
                                            resizeMode='stretch'
                                            className=" w-full h-full border-[1px] rounded-lg border-gray-200"
                                        />
                                    </View>     
                                )}
                                <Text className=" text-justify mt-5 font-semibold text-2xl">{item.back}</Text>
                                                        
                            </View>                
                        </View>
                    </FlipCard>
                    <Text className="self-center text-gray-500 text-lg font-normal mb-4">Tap to flip</Text>
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            className ="h-3/4 "
            scrollEnabled = {false}
            />
            

            <View className="mx-10  flex-row justify-evenly" >
                {isFlipped && (
                    <Button 
                        title = "I forgot"
                        containerStyles={"w-1/2 mx-4"}
                        handlePress={handleWrong}
                    />
                )}
                
                {isFlipped && (
                    <Button 
                    title = "I got it"
                    containerStyles={"w-1/2 mx-4"}
                    handlePress={handleCorrect}
                />
                )}
                
                {progressPercentage==1 && (
                    <Button 
                        title = "Finish"
                        containerStyles={"w-1/2 mx-4"}
                        handlePress={() =>{router.back()}}
                    />
                )}

    
            </View>

        
        </View>
    )
}

export default Card