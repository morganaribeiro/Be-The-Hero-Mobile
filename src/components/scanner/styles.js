import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const borderRadius = 10;
const borderWidth = 2; 

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'orange',
        padding: 8,
      },
      paragraph: {
        margin: 24,
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      cornerTopLeft: {
        top: -15,
        left: -20,
        borderTopLeftRadius: borderRadius,
        borderLeftWidth: borderWidth,
        borderTopWidth: borderWidth,
      },
      cornerTopRight: {
        top: -15,
        right: -20,
        borderTopRightRadius: borderRadius,
        borderRightWidth: borderWidth,
        borderTopWidth: borderWidth,
      },
      cornerBottomLeft: {
        bottom: -20,
        left: -20,
        borderBottomLeftRadius: borderRadius,
        borderLeftWidth: borderWidth,
        borderBottomWidth: borderWidth,
      },
      cornerBottomRight: {
        bottom: -20,
        right: -20,
        borderBottomRightRadius: borderRadius,
        borderRightWidth: borderWidth,
        borderBottomWidth: borderWidth,
      },
      footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
      },
      cancelText: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
      },
});


