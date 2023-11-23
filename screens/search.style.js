import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
        searchContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        backgroundColor: COLORS.secondary,
        marginHorizontal: SIZES.small,
        height: 50,
        marginTop:30
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
    },
    searchImage:{
        resizeMode: 'contain',
        width: SIZES.width -100,
        height: SIZES.height -300,
        opacity: 0.9
    }
});
export default styles