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
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import CookieManager from '@react-native-cookies/cookies';

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
      incognito={false}
      sharedCookiesEnabled={true}
    />
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // set a cookie
  CookieManager.set('https://letsmakeindia.com/test/app.php', {
    name: 'a_on',
    value: 'c0a03305b16e4885b51c9cb114d47f65-r',
    domain: 'letsmakeindia.com',
    path: '/',
    version: '1',
    expires: '2022-05-30T12:30:00.00-05:00'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });

  CookieManager.set('https://letsmakeindia.com/test/app.php', {
    name: 'r_t',
    value: 'c0a03305b16e4885b51c9cb114d47f65-r',
    domain: 'letsmakeindia.com',
    path: '/',
    version: '1',
    expires: '2022-05-30T12:30:00.00-05:00'
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });

  // Get cookies for a url
  CookieManager.get('https://letsmakeindia.com/test/app.php')
  .then((cookies) => {
    console.log('CookieManager.get =>', cookies);
  });

  const styles = StyleSheet.create({
    openChatButtonContainer: {
      position:'absolute',
      right:0,
      bottom:0,
      marginBottom:10,
      marginRight:10,
      zIndex:1,
      height:64,
      width:64
    },
    openChatButton: {
      backgroundColor: '#0cbaba',
      borderColor: '#0cbaba',
      borderWidth: 1,
      height: 64,
      width: 64,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 10,
      right:10,
      shadowColor: "#380036",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
          height: 1,
          width: 0
      },
      elevation: 5
    },
    modalActionBar: {
      position:'absolute',
      top:0,
      right:0,
      marginTop:0,
      marginRight:0,
      zIndex:1,
      height:52,
      width: '100%',
      backgroundColor: '#0cbaba',
      borderColor: '#0cbaba',
      elevation: 5
    },
    closeChatButton: {
      backgroundColor: 'transparent',
      height: 48,
      width: 48,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      right:0,
    },
    modalCloseBtnText: {
      fontSize: 24, 
      color: 'white', 
      fontWeight: 'bold'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0
    },
    modalView: {
      width: '98%',
      height: '98%',
      margin: 0,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 5
    },
    button: {
      borderRadius: 3,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    view: {
      alignSelf: 'stretch',
      flex: 1,
    }
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1}}>
      <CustomHeaderWebView
        source={{
          uri: 'https://www.google.com/',
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.view}> 
          <WebView source = {{uri: 'https://letsmakeindia.com/test/chat.php'}} />
          <View style={styles.modalActionBar}>
            <Text style={{flex:1,alignItems: 'center',justifyContent: 'center', height:90, fontSize: 20, fontWeight: 'bold', padding: 10, color: 'white'}}>
              Chat Support
            </Text>
            <TouchableHighlight 
              style={styles.closeChatButton}
              underlayColor='#0cbaba' 
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseBtnText}>✕</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.openChatButtonContainer}>
        <TouchableHighlight 
          style={styles.openChatButton}
          underlayColor='#0cbaba' 
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 24, color: 'black'}}>💬</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default App;
