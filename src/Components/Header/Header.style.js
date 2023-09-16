import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.quinary,
        height: 80,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.tertiary,
        marginTop: 25,
    },
    text: {
        fontSize: 40,
        color: colors.tertiary,
        fontFamily: 'Schoolbell',
    }
})