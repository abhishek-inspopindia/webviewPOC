import * as React from 'react';
import { Text, View } from 'react-native';
import ChatModal from '../components/ChatModal';
import CustomHeaderWebView from '../components/CustomHeaderWebView';

function PolicyScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeaderWebView
        source={{
          uri: 'https://www.google.com/',
        }}
      />
      
    </View>
  );
}

export default PolicyScreen;