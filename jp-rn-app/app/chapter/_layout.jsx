
import {  Stack, useLocalSearchParams,  } from 'expo-router'
import BackButton from '../../components/BackButton'

const ChapterLayout = () => {
  const {item} = useLocalSearchParams()
  const chapterItem = item ? JSON.parse(item) : null

  return (
      <Stack>
        <Stack.Screen 
            name="[id]" 
            options={{
            title: `${chapterItem.title} column`,
            headerStyle:{
              backgroundColor: '#F1063E',
              height: 500
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
            headerLeft: () => {
              return <BackButton/>
            }
          }}
        />
    
      </Stack>  

  )
}
      
export default ChapterLayout
