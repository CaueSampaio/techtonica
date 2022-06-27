import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack, MainStackName} from './MainStack';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {MainStack.map(screen => (
        <Stack.Screen
          component={screen.component}
          key={`${MainStackName}-${screen.name}`}
          name={screen.name}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
