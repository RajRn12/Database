import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
    },
    itemText: {
        fontSize: 24
    },
    scrollArea: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        paddingTop: 16,
    }
});

export default styles;