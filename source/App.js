// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { Main } from './navigation';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

export default App;