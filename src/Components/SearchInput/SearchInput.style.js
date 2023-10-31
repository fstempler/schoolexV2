import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.quinary,
    },
    icon: {
        marginHorizontal: 5,
    },
    input: {
        color: '#fff',
        backgroundColor: colors.quinary,        
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.primary,
        width: '80%',
        fontSize: 20,
        margin: 10,
        fontFamily: 'LatoRegular',
    }
})