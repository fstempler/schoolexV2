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
    title:{
        margin: 10,
        fontSize: 18,
        fontFamily: 'LatoRegular',
        color: '#ffffff',
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
    registerButton:{
        backgroundColor: '#FFFBEB',      
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
        color: '#e8d7f1',
    },    
    loginButton:{
        backgroundColor: '#FFFBEB',        
        width:"50%",
        height:30,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    loginSectionContainer:{
        marginTop: 30,
        width: '80%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    line:{        
        borderBottomWidth: 1,
        borderBottomColor: "#393E41",        
        width: '100%',
        marginTop: 20,
    },
    
    
})