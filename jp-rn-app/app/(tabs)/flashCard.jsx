import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import Header from '../../components/Header'
import { decks } from '../../assets/data/decks'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const FlashCard = () => {
  return (
    <View>
      <Header/>

      <ScrollView className="h-full px-5 pt-5">
        <Text className="text-2xl font-bold mb-5 mt-3">Deck List</Text>
        
        {decks?.map((item, index) => (
          <Pressable 
            key={index}
            className="bg-white active:bg-gray-100 border-[1px] h-[70px] rounded-xl border-gray-200 px-5 py-5 justify-center mb-2 flex-row"
            onPress={
              () => {
                router.push(
                  {
                    pathname: `flashCard/${item.name}`,
                    params: {item: JSON.stringify(item.card), name: item.name}
                  }
                )
              }
            }
          >
            <View className="flex-1 flex-col justify-center">
              <Text className= "text-lg font-semibold ">{item.name}</Text>
              <Text className= "text-sm font-normal">{item.card.length} {item.card.length<=1? "card": "cards"}</Text>
            </View>
            <View className="justify-center">
              <AntDesign  name="caretright" size={20} color="#F1063E" />
            </View>
            
          </Pressable>
        ))}
        
      </ScrollView>
    </View>
  )
}

export default FlashCard