import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.quinary, 
        display: 'flex',
        alignItems:'left',                
    },
    list: {
        marginTop: 50,                
    },
    text: {
        color: colors.tertiary,
        fontSize: 24,
        fontFamily: 'LatoRegular',
        paddingVertical: 10,
        marginHorizontal: 15        
    },
    subject: {
        color: colors.tertiary,
        textAlign: 'left',
        fontFamily: 'LatoRegular',
        fontSize: 18,
        paddingVertical: 15,
        marginHorizontal: 15        
    }

})