import React from 'react';
import Navigation from 'navigation';
import {Provider as AntDesignProvider} from '@ant-design/react-native';

const App = () => {
  return (
    <AntDesignProvider>
      <Navigation />
    </AntDesignProvider>
  );
};

export default App;
