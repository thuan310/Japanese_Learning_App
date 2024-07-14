import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import images from '../../constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';


const CourseDetail = () => {
  const {item} = useLocalSearchParams()
  const courseItem = item ? JSON.parse(item) : null

  return (
    <View>
      
      <ScrollView className="h-full px-7 pt-7">
        <Image
          source={images.course}
          className="h-[190px] w-full rounded-lg mb-5"
          resizeMode='contain'
        />
        <Text className="text-xl font-bold mb-2">About course</Text>
        <Text className=" text-sm font-light text-justify text-gray-600">{courseItem.description}</Text>
        <Text className="text-xl font-bold mb-2 mt-5">Chapters</Text>
        
        {courseItem?.chapter?.map((chapter, index) => (
          <Pressable 
            key={index} 
            className="bg-white active:bg-gray-100 border-[1px] h-[55px] rounded-xl border-gray-200 justify-center mb-2 flex-row"
            onPress={
              () => {
                router.push(
                  {
                    pathname: `chapter/${chapter.title}`,
                    params: {item: JSON.stringify(chapter) }
                  }
                )
              }
            }
          >
            <View className="flex-1 flex-row items-center">
              <Text className= {`text-primary text-2xl font-bold mx-5`}>{index+1}</Text>
              <Text className= {` text-xl font-normal `}>{chapter.title} column</Text>
            </View>
            <View className="justify-center pr-3">
              <AntDesign  name="caretright" size={20} color="#F1063E" />
            </View>
            
          </Pressable>
        ))}
      </ScrollView>
        

    </View>
  )
}

export default CourseDetail