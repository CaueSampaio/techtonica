import React from 'react'
import {Text, View} from 'react-native';

const HomeScreen: React.FC = () => {
  const name = 'Outsmarter'
  return (
    <View>
      <Text>Olá {name}!</Text>
      <Text>Seja bem vindo a Tech Tônica :)</Text>
    </View>
  );
};

export default HomeScreen;
