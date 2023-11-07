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
        flexDirection: 'row',
        marginTop: 50,
        backgroundColor: colors.quinary,
        width: '100%',
        padding: 30,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#fff',
    },
    picBtnContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    cameraButton:{
        backgroundColor: colors.quaternary,
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
    userDataContainer: {        
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },
    userDataText: {
        color: '#fff',
        margin: 3,
        fontFamily: 'LatoRegular',
    },
    dataContainer: {
        marginTop: 5,        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {        
        padding: 5,
        borderBottomWidth: 1,
        borderColor: colors.quinary,
        width: '50%',
        fontSize: 15,
        margin: 5,
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
    saveChangesBtn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary,
        backgroundColor: colors.quaternary,
        padding: 10,                
        marginTop: 10,
    },
    saveChangesBtnText:{
        color: '#fff',
    },
    logoutContainer:{                
        marginTop: 15,        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    logoutText: {
        fontFamily: 'LatoRegular',
        borderWidth: 0.5,
        padding: 5,
        textAlign: 'center',
        borderRadius: 5,
    }
})
