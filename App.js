import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            title:"Página Principal", headerTitleAlign:"center", headerTintColor:'#2E2FBF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}