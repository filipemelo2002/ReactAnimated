import React from 'react';
import Decay from './src/Decay';
import Opacity from './src/Opacity';
import Translate from './src/Translate';
import Scale from './src/Scale';
import WidthHeight from './src/WidthHeight';
import AbsolutePosition from './src/AbsolutePosition';
import InterpolateColors from './src/InterpolateColors';
import ReactAnimated from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={ReactAnimated}  options={{ title: 'React Animated Library' }} />
        <Stack.Screen name="Opacity" component={Opacity}  options={{ title: 'Opacity' }} />
        <Stack.Screen name="Scale" component={Scale}  options={{ title: 'Scale' }} />
        <Stack.Screen name="Translate" component={Translate}  options={{ title: 'Translate' }} />
        <Stack.Screen name="WidthHeight" component={WidthHeight}  options={{ title: 'WidthHeight' }} />
        <Stack.Screen name="AbsolutePosition" component={AbsolutePosition}  options={{ title: 'AbsolutePosition' }} />
        <Stack.Screen name="InterpolateColors" component={InterpolateColors}  options={{ title: 'InterpolateColors' }} />
        <Stack.Screen name="Decay" component={Decay}  options={{ title: 'Decay' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
