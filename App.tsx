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
import CookieManager from '@react-native-cookies/cookies';

const App = () => {
  // set a cookie
  CookieManager.set('https://mypolicy-qa6.dev-elephant.com', {
    name: 'src',
    value: 'mobile',
    domain: 'dev-elephant.com',
    path: '/',
    version: '1',
    expires: '2022-05-30T12:30:00.00-05:00'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });

  CookieManager.set('https://mypolicy-qa6.dev-elephant.com', {
    name: 'a_on',
    value: 'c0a03305b16e4885b51c9cb114d47f65-r',
    domain: 'dev-elephant.com',
    path: '/',
    version: '1',
    expires: '2022-05-30T12:30:00.00-05:00'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });

  CookieManager.set('https://mypolicy-qa6.dev-elephant.com', {
    name: 'r_t',
    value: '266e9cef637449389a3599879271df18-r',
    domain: 'dev-elephant.com',
    path: '/',
    version: '1',
    expires: '2022-05-30T12:30:00.00-05:00'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });

  // Get cookies for a url
  CookieManager.get('https://mypolicy-qa6.dev-elephant.com')
  .then((cookies) => {
    console.log('CookieManager.get =>', cookies);
  });
  
  return (
    <NavigationContainer>
      <FooterMenu />
      <ChatModal />
    </NavigationContainer>
  );
};

export default App;
