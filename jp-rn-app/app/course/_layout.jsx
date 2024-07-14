
import {  Stack, useLocalSearchParams,  } from 'expo-router'
import BackButton from '../../components/BackButton'

const DynamicScreens = () => {
  const {item} = useLocalSearchParams()
  const courseItem = item ? JSON.parse(item) : null

  return (
      <Stack>
        <Stack.Screen 
            name="[course]" 
            options={{
            title: courseItem.name,
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
      
export default DynamicScreens
