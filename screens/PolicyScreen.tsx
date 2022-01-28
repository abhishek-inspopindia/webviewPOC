import * as React from 'react';
import { Text, View } from 'react-native';
import CustomHeaderWebView from '../components/CustomHeaderWebView';

function PolicyScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeaderWebView
        source={{
          uri: 'https://mypolicy-qa6.dev-elephant.com/policy/action',
        }}
      />      
    </View>
  );
}

export default PolicyScreen;