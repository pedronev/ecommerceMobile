import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    WelcomeTxt: (color, top)=> ({
        fontFamily: 'bold',
        fontSize: SIZES.xLarge,
        marginTop: top,
        color: color,
        marginHorizontal: 12,
    }),
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        backgroundColor: COLORS.secondary,
        marginHorizontal: SIZES.small,
        height: 50
    },
    searchIcon:  {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput:{
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width: 50,
        backgroundColor: COLORS.primary,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles