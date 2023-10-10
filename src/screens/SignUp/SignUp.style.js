import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d6d6d6',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    loginContainer: {
        backgroundColor: '#FFDA47',
        width: '80%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFCC00",
    },
    title:{
        margin: 10,
        fontSize: 18,
        fontFamily: 'LatoRegular',
        color: '#393E41',
    },
    inputEmail: {
        width: '95%',
        backgroundColor: '#FFE270',
        borderWidth: 1,
        borderColor: '#FFCC00',
        height: 30,
        borderRadius: 5,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4,
    },
    registerButton:{
        backgroundColor: '#FFFBEB',
        borderWidth: 1,
        borderColor: '#FFCC00',
        width:"50%",
        height:50,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    loginButtonTxt:{
        fontFamily: 'LatoRegular',
        fontSize: 13,
        color: '#393E41',   
        fontWeight: '900',
    },
    subtitle:{
        marginBottom: 5,
        fontFamily: 'LatoRegular',
        fontSize: 12,
        color: '#393E41',
    },
    checkBoxContainer:{
        flexDirection:'row' ,        
        marginBottom: 30,
    },
    loginButton:{
        backgroundColor: '#FFFBEB',
        borderWidth: 1,
        borderColor: '#FFCC00',
        width:"50%",
        height:30,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    loginSectionContainer:{
        marginTop: 20,
        width: '80%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    line:{        
        borderBottomWidth: 1,
        borderBottomColor: "#393E41",        
        width: '100%',
    }
    
})