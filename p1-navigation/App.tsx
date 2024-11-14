import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';

type RootStackParamList = {
  Tela1: any;
  Tela2: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
