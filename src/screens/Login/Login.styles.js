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
        borderColor: "#FFCC00"
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
    loginButton:{
        backgroundColor: colors.primary,
        width:"50%",
        height:50,
        borderRadius:5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'LatoRegular',
    },
    registerButton:{
        backgroundColor: colors.tertiary,
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
        color: '#393E41'
    },
    loginButtonTxt:{
        fontFamily: 'LatoRegular',
        fontSize: 13,
        color: '#393E41',   
        fontWeight: '900',
    },
})