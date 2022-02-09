import * as React from 'react';
import { Text, View } from 'react-native';
import CustomHeaderWebView from '../components/CustomHeaderWebView';

function ClaimsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeaderWebView
        source={{
          uri: 'https://fnol-qa6.dev-elephant.com',
        }}
      />
      
    </View>
  );
}

export default ClaimsScreen;