import React from 'react';
import HomeScreen from 'screens/HomeScreen/HomeScreen';

type MainStack<T> = {
  name: string
  component: React.ComponentType<T>
}

export const MainStack = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
];

export const MainStackName = 'MainStack'
