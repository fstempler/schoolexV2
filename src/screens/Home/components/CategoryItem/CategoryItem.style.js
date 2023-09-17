import { StyleSheet } from "react-native"
import { colors } from '../../../../constants/colors'

export default styles = StyleSheet.create({
    cardContainer:{        
        marginVertical: 10, 
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 90,        
        width: '100%',
        maxWidth: 250,
        height: 'auto',
        minHeight: 60,
    },
    text: {
        color: colors.tertiary,
        fontFamily: 'Schoolbell',
        fontSize: 25,
        paddingHorizontal: 60,
    }
})