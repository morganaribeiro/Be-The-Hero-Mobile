import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, /* é como definir ambos: paddingLeft and passingRight */ 
        paddingTop: Constants.statusBarHeight + 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident: {
        padding: 24,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 10,
        marginTop: 48
    },
    incidentProperty: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#41414D',
        marginTop: 24
    },
    incidentValue: {
        marginTop: 8,
        color: '#737380',
        fontSize: 15
    },
    contactBox: {
        padding: 24,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 10,
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30 
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row', // Por padrão o flexDirection é column
        justifyContent: 'space-between'
    },
    
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%', 
        justifyContent: 'center', // Em relação a column/ Por padrão é mainAxis
        alignItems: 'center' // Em relação a row/ Por padrão é CrossAxis
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})