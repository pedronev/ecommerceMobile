import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        alignContent: 'center'
    },
    container:{
        alignItems: 'center',
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small/2,
    },
    container2:{
        alignItems: 'center',
        paddingTop: SIZES.xLarge,
        justifyContent:"space-between"
    },
    separator: {
        height: 16
    }
})

export default styles;