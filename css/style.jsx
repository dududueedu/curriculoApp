import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerPerfil: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    fotoPNG: {
        height: 140,
        width: 140
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    profissao: {
        color: '#939393',
        marginBottom: 7
    },
    redeSociais: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-evenly',
        marginTop: 10
    }, 
    cardContainer: {
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 15
    }, 
    card: {
        width: '60%', 
        borderWidth: 2, 
        borderRadius: 15,
        borderColor: '#939393',
        alignItems: 'center', 
        padding: 5
    }, 
    cardText: {
        color: '#939393', 
        paddingTop: 5, 
        textAlign: 'center'
    }
});

export default styles