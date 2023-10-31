import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        flex: 1,        
        display: 'flex',
        alignItems:'left',                
        backgroundColor: '#ffffff95',
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center',
    },
    nameContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quinary,        
    },
    textName: {
        color: '#fff',
        fontSize: 24,
        padding: 5,
        fontFamily: 'LatoRegular',
    },
    list: {
        marginTop: 50,                
    },
    text: {
        color: colors.quinary,
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
        color: colors.quinary,
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
        color: colors.quinary,
    },
    addBtn:{
        fontFamily: 'LatoRegular',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.quinary,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    }

    

})