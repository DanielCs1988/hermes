import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        paddingVertical: 10,
        alignItems: 'center'
    },
    buttonGroup: {
        justifyContent: 'space-evenly'
    },
    thickBorder: {
        borderBottomWidth: 5,
        borderBottomColor: '#999'
    },
    leftCol: {
        flex: 1,
        alignItems: 'center'
    },
    rightCol: {
        flex: 4,
        justifyContent: 'center'
    },
    monthAbbr: {
        fontWeight: 'bold',
        fontSize: 16
    },
    dayAbbr: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;