import {
    Text,
    View,
    StyleSheet,Pressable,
    Image
  } from "react-native";
import { GlobalStyles } from "../constants/styles";
// import { clearSecurely } from "../utils/secureOp";
import { useAppSelector,useAppDispatch} from "../hooks";
import { signout } from "../Slice/userSlice";

import { SafeAreaView } from 'react-native-safe-area-context';

// import profileBasic from "../assets/profile-basic.png" 




export function Profile(){
    const currUser = useAppSelector((state) => state.users.email)
    const dispatch = useAppDispatch()


    function handleLogout(){
        dispatch(signout())
        // clearSecurely("user")  
    }
    return (
      <SafeAreaView>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}>
            <Image
              source={require("../assets/profile-basic.png")}
              style={[styles.profileImg,styles.profileImgInner]}
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.profileHeading}>{currUser}</Text>
            <Text>Sopot, Poland</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [styles.logoutBtn, pressed && styles.pressed]}
        >
          <View style={styles.textBtnContainer}>
            <Text style={styles.textBtn}>Edit</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.editBtn,{borderColor:GlobalStyles.colors.primary400, borderWidth:1}, pressed && styles.pressed]}
          onPress={handleLogout}
        >
          <View style={styles.textBtnContainer}>
            <Text style={{color:GlobalStyles.colors.primary400,fontWeight:'bold'}}>Log Out</Text>
          </View>
        </Pressable>
        </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        paddingTop:50
    },
    logoutBtn:{
        alignItems:"center",
        backgroundColor:GlobalStyles.colors.primary400,
        paddingVertical:5,
        borderRadius:9,
        height:50,
        width:150
    },
    editBtn:{
      alignItems:"center",
      borderColor:GlobalStyles.colors.primary400,
      paddingVertical:5,
      borderRadius:9,
      height:50,
      width:150
  },
    pressed:{
        opacity:0.75
    },
    textBtnContainer:{
      flex:1,
      justifyContent:"center",
    },
    textBtn:{
        color:'white',
        fontWeight:'bold'
    },
    profileImg:{
      width:80,
      height:80,
      borderRadius:99,

    },
    profileImgInner:{
      borderColor:GlobalStyles.colors.primary100,
      borderWidth:3
    },
    profileContainer:{
      flexDirection:'row',
      paddingVertical: 10,
      paddingHorizontal:15,
      marginTop: 25,
      marginBottom:10,
      marginHorizontal:10,
      gap:10,
      alignItems:'center',
      // backgroundColor:GlobalStyles.colors.primary200,
      justifyContent:'space-between'
    },
    profileInfoContainer:{
      flexDirection:"column",
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    profileHeading:{
      fontSize:20,
      fontWeight:'bold'
    },
    buttonsContainer:{
      flexDirection:'row',
      // backgroundColor:"green",
      justifyContent:"center",
      gap:10,
      margin:10
    }
})
