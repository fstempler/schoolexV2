import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    input: {
        color: colors.quinary,
        backgroundColor: colors.primary,        
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.quinary,
        width: '80%',
        fontSize: 20,
        margin: 10,
        fontFamily: 'LatoRegular',
    }
})