import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Tabs } from 'expo-router';


import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="time"
        options={{
          title: 'Time',
          tabBarIcon: ({ color }) => <TabBarIcon name="hourglass" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="ciclo"
        options={{
          title: 'Ciclo',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
