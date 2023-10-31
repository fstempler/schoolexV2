import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,      
        display: 'flex',
        alignItems:'center',             
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        marginTop: 50,                
    },
    titleContainer:{
        margin: 10,
    },
    title:{
        fontFamily: 'LatoRegular',
        fontSize:24,
    }
})