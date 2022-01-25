import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PolicyScreen from '../screens/PolicyScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ClaimsScreen from '../screens/ClaimsScreen';
import DocumentScreen from '../screens/DocumentScreen';

const Tab = createBottomTabNavigator();

function FooterMenu() {
    return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Policy" component={PolicyScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />      
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Claims" component={ClaimsScreen} />
        <Tab.Screen name="Document" component={DocumentScreen} />
      </Tab.Navigator>
    );
  }

  export default FooterMenu;