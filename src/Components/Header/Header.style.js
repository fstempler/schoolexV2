import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.quinary,
        height: 80,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'LatoRegular',
    }
})