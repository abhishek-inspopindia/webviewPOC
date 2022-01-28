import * as React from 'react';
import { Text, View } from 'react-native';
import CustomHeaderWebView from '../components/CustomHeaderWebView';

function PaymentScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeaderWebView
        source={{
          uri: 'https://mypolicy-qa6.dev-elephant.com/policy/action/(payments:payments)',
        }}
      />
      
    </View>
  );
}

export default PaymentScreen;