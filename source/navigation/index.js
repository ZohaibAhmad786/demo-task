import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './../routes/home/home_screen';
import ChatScreen from '../routes/chats';
import MessagesScreen from '../routes/messages';
import { createStackNavigator } from '@react-navigation/stack';
import StudentDetailsScreen from '../routes/student-details';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
      <Drawer.Screen name="home" options={{
        title: 'Students'
      }} component={HomeScreen} />
      <Drawer.Screen options={{
        title: 'Chats'
      }} name="chat" component={ChatScreen} />
    </Drawer.Navigator>
  );
}
export function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
      <Stack.Screen name="drawer" component={MyDrawer} />
      <Stack.Screen name="messages" component={MessagesScreen} />
      <Stack.Screen name="studentDetails" component={StudentDetailsScreen} />
    </Stack.Navigator>
  );
}