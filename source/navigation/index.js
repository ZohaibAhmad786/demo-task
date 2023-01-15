import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './../routes/home/home_screen';



const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='home'>
      <Drawer.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}