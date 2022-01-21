/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const CustomHeaderWebView = (props:any) => {
  const { uri, onLoadStart, ...restProps } = props;
  const [currentURI, setURI] = useState(props.source.uri);
  const newSource = { ...props.source, uri: currentURI };

  return (
    <WebView
      {...restProps}
      source={newSource}
      onShouldStartLoadWithRequest={(request) => {
        // If we're loading the current URI, allow it to load
        if (request.url === currentURI) return true;
        // We're loading a new URL -- change state first
        setURI(request.url);
        return false;
      }}
      incognito={true}
      sharedCookiesEnabled={true}
    />
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CustomHeaderWebView
      source={{
        uri: 'https://mypolicy-ci1.dev-elephant.com',
        headers: {
          'Cookie': 'a_on=c0a03305b16e4885b51c9cb114d47f65-r;r_t=c0a03305b16e4885b51c9cb114d47f65-r',
          //'Cookie': 'a_on=e7b75276c0064437ad7d2e13ae1f4806-r:domain=.dev-elephant.com:path=/;r_t=e7b75276c0064437ad7d2e13ae1f4806-r:domain=.dev-elephant.com:path=/;',
        },
      }}
    />
  );
};

export default App;
