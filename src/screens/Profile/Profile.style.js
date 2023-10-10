import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.quinary
    },
    picBtnContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    cameraButton:{
        backgroundColor: colors.secondary,
        height: 40,
        padding: 5,
        borderRadius: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataContainer: {
        marginTop: 30,        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {        
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.quinary,
        width: '50%',
        fontSize: 15,
        margin: 10,
        fontFamily: 'LatoRegular',
    },
    dataText: {
        fontFamily: 'LatoRegular',
        fontSize: 20,
    } 
})
