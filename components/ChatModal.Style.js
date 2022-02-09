import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalContainer: {
        alignSelf: 'stretch',
        flex: 1,
    },
    modalHeader: {
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
    modalHeaderTitle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center', 
        height:90, 
        fontSize: 20, 
        fontWeight: 'bold', 
        padding: 10, 
        color: 'white'
    },
    btnCloseChat: {
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
    
    openChatButtonContainer: {
        position:'absolute',
        right:0,
        bottom:0,
        marginBottom:48,
        marginRight:0,
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
});