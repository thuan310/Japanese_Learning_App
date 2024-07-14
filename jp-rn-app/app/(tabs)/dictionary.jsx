import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import Header from '../../components/Header'
import { decks } from '../../assets/data/decks'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import InputField from '../../components/InputField';
import { useState, useEffect } from 'react';
import { useFetchData } from '../../assets/data/api';

const Dictionary = () => {

  const {words, loading, error } = useFetchData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);

  if (!words) {
    return <Text>Loading...</Text>;
  }

  useEffect(() => {
    if (words) {
      setFilteredWords(words);
    }
  }, [words]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredWords(words);
    } else {
      const filtered = words.filter(item => 
        item.word.includes(searchQuery) ||
        item.reading.includes(searchQuery) ||
        item.meanings.some(meaning => meaning.includes(searchQuery))
      );
      setFilteredWords(filtered);
    }
  }, [searchQuery, words]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }


  return (
    <View>
      <Header/>

      <View className="h-full px-5 pt-5">
        <View className="flex-row justify-between">
          <InputField
              title="Search"
              value={searchQuery}
              handleChangeText={setSearchQuery}
              otherStyles="flex-1 h-8"
          />
          <Pressable 
            className="items-center justify-center ml-3 "
            onPress={() => setSearchQuery("")}
          >
            <Text className="text-primary text-base">Clear</Text>
          </Pressable>
        </View>
        
        <FlatList
          data={filteredWords}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable 
            onPress={()=>{router.push(
              {
                pathname: `detail/${item.id}`,
                params: {item: JSON.stringify(item) }
              }
            )
          }}
            >
              <View className="p-2 border-b border-gray-200">
                <View className="flex-row items-center">
                  <Text className="text-xl font-bold mr-3">{item.word}</Text>
                  <Text className="text-lg text-red-400">{item.reading}</Text>
                </View>
                <Text className="text-sm text-gray-500">
                    {item.meanings.join(', ')}
                </Text>
              </View>
            </Pressable>
          )}
        
        />
        
      </View>
    </View>
  )
}

export default Dictionary