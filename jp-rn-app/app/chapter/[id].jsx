import { View, Text, FlatList, Image, Pressable} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Button from '../../components/Button';
import * as Progress from 'react-native-progress'
import SoundButton from '../../components/SoundButton';


const Chapter = () => {
    const {item} = useLocalSearchParams()
    const chapterItem = item ? JSON.parse(item) : null
    const flatListRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progressPercentage, setProgressPercentage] = useState(0)
    

    useEffect(() => {
        const newProgressPercentage = ((currentIndex) / (chapterItem.content.length-1)) ;
        setProgressPercentage(newProgressPercentage);
    }, [currentIndex, chapterItem])

 
    const handleNext = () => {
        if (currentIndex < chapterItem.content.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
          flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
          setCurrentIndex(currentIndex - 1);
        }
    };


    return (
        <View> 
            
            <Progress.Bar 
                progress={progressPercentage} 
                width={330} color='#F1063E' unfilledColor='#d6d6d6' borderColor='#d6d6d6' 
                className=" self-center mt-4"
            />
            <FlatList 
            ref={flatListRef}
            data={chapterItem.content}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
                <View className="w-screen pt-3 px-7">
                    <View className="bg-white px-6 py-6 h-5/6 mx-3 border-[1px] rounded-xl border-gray-200 items-center justify-start flex-col">
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
                        <Text className=" text-justify mt-5">{item.description}</Text>
                        
                        

                    </View>
                    
                </View>
                
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            className ="h-3/4 "
            scrollEnabled = {false}
            />
            

            <View className="mx-10  flex-row justify-evenly" >
                {currentIndex>0 && (
                    <Button 
                        title = "Previous"
                        containerStyles={"w-1/2 mx-4"}
                        handlePress={handlePrevious}
                    />
                )}
                
                {currentIndex < chapterItem.content.length-1 && (
                    <Button 
                    title = "Next"
                    containerStyles={"w-1/2 mx-4"}
                    handlePress={handleNext}
                />
                )}
                
                {currentIndex == chapterItem.content.length-1 && (
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

export default Chapter