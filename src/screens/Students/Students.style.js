import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,        
    },
    listContainer: {
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',        
    },
    text: {        
        borderWidth: 1,        
        borderColor: colors.quinary,
        color: colors.quinary,
        fontSize: 20,
        fontFamily: 'LatoRegular', 
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,          
    }
})