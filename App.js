import React from 'react';
import MainScreen from './src/Screens/MainScreen';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
