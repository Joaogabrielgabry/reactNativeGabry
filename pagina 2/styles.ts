import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    iconTopRight: {
        marginRight: 15,
    },
    iconTopLeft: {},
    money: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 16,
    },
    description: {
        color: '#fff',
        fontSize: 15,
    },
    descriptionView: {
        marginTop: 10,
    },
    ferramentasPix: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    iconView: {
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 50,
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    iconViewTotal: {
        alignItems: 'center',
    },
    descriptionIcon: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10,
        fontWeight: 'bold',
    },
    line: {
        height: 3,
        backgroundColor: '#222',
        width: '100%',
        marginTop: 30,
    },
    footer: {
        marginTop: 30,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    footerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 5,
        marginTop: 15,
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    footerTextTop: {
        color: '#222',
        fontSize: 12,
        marginLeft: 20,
    },
    footerContentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerContentRight: {
        alignItems: 'center',
    },
    arrow: {
        marginRight: 10,
    },
    lineFt: {
        height: 1,
        backgroundColor: '#222',
        width: '100%',
        marginTop: 5,
    },
});
