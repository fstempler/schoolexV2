import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'flex-end',                      
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer:{             
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        borderRadius: 100,        
    },
    logo:{
        width: 300,
        height: 300,     
        borderRadius: 150,   
    },
    loginContainer: {        
        backgroundColor: '#0e273c',
        width: '100%',
        height: '50%',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },    
    inputEmail: {
        width: '95%',
        backgroundColor: '#4a306d',        
        height: 30,
        borderRadius: 5,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4,
        color:"#ffffff",
    },
    loginButton:{
        backgroundColor: '#FFFBEB',      
        width:"50%",
        height:50,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    registerButton:{
        backgroundColor: '#FFFBEB',      
        width:"50%",
        height:30,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        fontFamily: 'LatoRegular',
    },
    title:{
        margin: 10,
        fontSize: 18,
        fontFamily: 'LatoRegular',
        color: '#ffffff',
    },
    loginButtonTxt:{
        fontFamily: 'LatoRegular',
        fontSize: 13,
        color: '#393E41',   
        fontWeight: '900',
    },
    subtitle:{
        margin: 10,
        fontSize: 15,
        fontFamily: 'LatoRegular',
        color: '#ffffff',
    }
})