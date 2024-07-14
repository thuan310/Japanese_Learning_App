import { View, Text, Image,  } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className = "items-center justify-center gap-2">
      <Image
        source = {icon}
        resizeMode="contain"
        tintColor={color}
        className= "w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} pt-1`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )

}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false, 
          tabBarActiveTintColor: '#F1063E',
          tabBarInactiveTintColor: '#B0B0B0',
          tabBarStyle:{
            backgroundColor: '#ffffff',
            height: 100
          },     
        }}
      >
        <Tabs.Screen
          name="learn"
          options={{
            title: "Learn",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.book}
                color={color}
                name="Learn"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="dictionary"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="flashCard"
          options={{
            title: "Card",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.card}
                color={color}
                name="Card"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="signOut"
          options={{
            title: "SignOut",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.card}
                color={color}
                name="Sign Out"
                focused={focused}
              />
            ),
          }}
        />

      </Tabs>
    </>
  )
}

export default TabsLayout