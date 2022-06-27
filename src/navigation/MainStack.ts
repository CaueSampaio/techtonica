import React from 'react';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen/ProfileScreen';

type MainStack<T> = {
  name: string;
  component: React.ComponentType<T>;
};

export const MainStack = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
  },
];

export const MainStackScreenNames = MainStack.reduce(
  (ac, screen) => ({
    ...ac,
    [screen.name]: screen.name,
  }),
  {},
);
console.log('Names:', MainStackScreenNames);

export const MainStackName = 'MainStack';
