import React from 'react';
import Decay from './src/Decay';
import ReactAnimated from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={ReactAnimated}  options={{ title: 'React Animated Library' }} />
        <Stack.Screen name="Decay" component={Decay}  options={{ title: 'Decay' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
