import { View, Text, FlatList, ScrollView, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

import {writingCourses, jlptCourses} from '../../assets/data/course'
import Header from '../../components/Header'
import { router } from 'expo-router'
import { useFetchData } from '../../assets/data/api'

const Course = ({item, textStyles}) => {

  return (
    <Pressable 
      className= "bg-white active:bg-gray-100 mr-4 w-[100px] h-[140px] border-[1px] rounded-xl border-gray-200 items-center justify-center flex-col  "
      onPress={()=>{router.push(
          {
            pathname: `course/${item.name}`,
            params: {item: JSON.stringify(item) }
          }
        )

      }}
    >
      <View className=" pt-4 flex-1 justify-center">
        <Text className= {`text-primary text-5xl font-normal ${textStyles} `}>{item.title}</Text>
      </View>
      <Text className="  mb-2">{item.name}</Text>
    </Pressable>
  )
}

const Learn = () => {
  
  const { writingCourse, jlptCourse, loading, error } = useFetchData();

  if (loading) {
    return (
      <View>
      </View>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Header/>

      <ScrollView className="h-full px-5 pt-5">
        <Text className="text-2xl font-bold mb-5 mt-3">Japanese Writing</Text>
        <FlatList 
          data={writingCourses}
          renderItem={({ item }) => ( 
            <Course item = {item}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text className="text-2xl font-bold mb-5 mt-7">JLPT Levels</Text>
        <FlatList 
          data={jlptCourses}
          renderItem={({ item }) => (
            <Course item = {item} textStyles={" text-4xl font-semibold"}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
        

    </View>

  )
}

export default Learn