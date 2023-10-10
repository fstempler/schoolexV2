import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary, 
        display: 'flex',
        alignItems:'center',             
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