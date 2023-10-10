import { StyleSheet } from "react-native";
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.quinary,        
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',        
    },
    nameContainer: {
        width: '50%',
    },  
    name: {
        fontSize: 20,        
        fontFamily: 'LatoRegular',
        color: colors.quinary,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,        
    },
    detailsStudent: {
        color: colors.quinary,
    },
    course: {
        color: colors.quinary,
    },
    subject: {
        color: colors.quinary,
    },
    grade: {
        color: colors.quinary,
    },
})
