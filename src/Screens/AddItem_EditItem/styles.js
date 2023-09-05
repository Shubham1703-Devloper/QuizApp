import { StyleSheet } from "react-native";
// import Config from "react-native-config";

export default styles = StyleSheet.create({
    maincontainer:{
        padding:20,
        flex:1,
        paddingBottom:120
    }
    ,
    HeaderTextStyle:{
        fontSize : 25,
        fontWeight:'bold',
        color:"black",
    },
    BottombuttonView:{
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        marginTop:15,
        marginHorizontal:25,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        right:0,
        left:0
    },
    HeaderViewStyle:{
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5,
        marginTop:20,
        marginHorizontal:5,
        flexDirection:'row',
    },
    UploadbuttonStyle:{
        width:'100%',
        height:50,
        borderRadius:10,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#70bd5b',
    },

    buttonstyle:{
       borderRadius:10
    }
   
})