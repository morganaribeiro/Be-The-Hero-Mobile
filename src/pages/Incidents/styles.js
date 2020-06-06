import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 30, 
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        color: '#13131A',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 16
    },
    description: {
        fontSize:  16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 10
    },
    incidentProperty: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#41414D'
    },
    incidentValue: {
        marginTop: 8,
        marginBottom: 13,
        color: '#737380',
        fontSize: 15
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }
});