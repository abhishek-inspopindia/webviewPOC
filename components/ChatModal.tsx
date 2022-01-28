import * as React from 'react';
import { useState } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './ChatModal.Style';


function ChatModal() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}> 
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Chat Support</Text>
            <TouchableHighlight 
              style={styles.btnCloseChat}
              underlayColor='#0cbaba'
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseBtnText}>✕</Text>
            </TouchableHighlight>
          </View>

          {/* Modal Body */}
          <WebView source = {{uri: 'https://letsmakeindia.com/test/chat.php'}} />
        </View>
      </Modal>
      
      {/* Modal Trigger Button */}
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
}

export default ChatModal;