import {
    Text,
    View,
    StyleSheet,Pressable
  } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { clearSecurely } from "../utils/secureOp";
import { useAppSelector,useAppDispatch} from "../hooks";
import { signout } from "../Slice/userSlice";




export function Profile(){
    const currUser = useAppSelector((state) => state.users.email)
    const dispatch = useAppDispatch()


    function handleLogout(){
        dispatch(signout())
        // clearSecurely("user")  
    }
    return (
      <View style={styles.rootContainer}>
        <Text>{currUser}</Text>
        <Pressable style={({pressed})=>[styles.logoutBtn, pressed && styles.pressed]} onPress={handleLogout}>
          <View>
            <Text style={styles.textBtn}>Log Out</Text>
          </View>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1
    },
    logoutBtn:{
        alignItems:"center",
        backgroundColor:GlobalStyles.colors.primary400,
        paddingVertical:5,
        borderRadius:99
    },
    pressed:{
        opacity:0.75
    },
    textBtn:{
        color:'white'
    }
})
