/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FooterMenu from './components/FooterMenu';
import ChatModal from './components/ChatModal';

const App = () => {
  return (
    <NavigationContainer>
      <FooterMenu />
      <ChatModal />
    </NavigationContainer>
  );
};

export default App;
