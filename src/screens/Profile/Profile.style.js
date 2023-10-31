import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center',
    },    
    profilePicContainer:{
        justifyContent:'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.quinary,
        marginTop: 80,
    },
    picBtnContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    cameraButton:{
        backgroundColor: colors.quinary,
        height: 40,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        color: '#fff',
    },
    dataContainer: {
        marginTop: 10,        
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
        fontSize: 18,
    },
    dataTitle:{
        fontFamily: 'LatoRegular',
        fontSize: 29,
    },
    dataMainContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        height: '50%',
    }, 
    logoutContainer:{                
        marginTop: 20,        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
