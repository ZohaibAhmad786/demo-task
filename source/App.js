// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigation';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
  );
}

export default App;