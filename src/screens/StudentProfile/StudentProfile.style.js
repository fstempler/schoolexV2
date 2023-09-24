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
    subjectContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginVertical: 15,
    },
    subject: {
        color: colors.tertiary,
        textAlign: 'left',
        fontFamily: 'LatoRegular',
        fontSize: 18,        
        marginHorizontal: 15        
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',        
    },
    counterButtons:{
        paddingHorizontal: 10,
    },
    grade: {
        fontFamily: 'LatoRegular',
        fontSize: 24,
        color: colors.tertiary,
    }

    

})