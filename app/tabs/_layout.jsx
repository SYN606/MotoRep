import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
  
    <Tabs
    
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000A26', height: 40 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#888",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Ionicons name="home" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Services"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Ionicons name="bicycle" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Bookings"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Ionicons name="clipboard" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Ionicons name="person" size={22} color={color} />
            </View>
          ),
        }}
      />

<Tabs.Screen
        name="login"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Ionicons name="log-in-outline" size={22} color={color} />
            </View>
          ),
        }}
      />

    </Tabs>
  );
}
