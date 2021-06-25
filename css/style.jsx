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
    }
});

export default styles