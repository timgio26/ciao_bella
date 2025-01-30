import { Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants/styles";
// import Feather from "@expo/vector-icons/Feather";

type FloatingBtnProp = {
    label:string;
    onpress?:()=>void;
    icon?:JSX.Element
}

export function FloatingBtn({label,onpress,icon}:FloatingBtnProp){
    return(
        <View style={styles.floatingBtnContainer}>
        <Pressable style={({pressed})=>[styles.floatingBtn,pressed&&styles.pressed]} onPress={onpress}>
            {icon}
          {/* <Feather
            name="list"
            size={24}
            color={GlobalStyles.colors.primary400}
          /> */}

          <Text>{label}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({

    floatingBtnContainer: {
      position: "absolute",
      bottom: 20,
    //   paddingHorizontal:20,
    //   paddingVertical:10
    //   backgroundColor:'green'
    },
    floatingBtn: {
      flexDirection: "row",
      minWidth:100,
      paddingHorizontal: 20,
      paddingVertical: 4,
      borderRadius: 99,
      backgroundColor: GlobalStyles.colors.primary50,
      borderColor: GlobalStyles.colors.primary400,
      borderWidth: 2,
      gap: 5,
      alignItems: "center",
      elevation:3,
      justifyContent:'center'
    },
    pressed:{
      opacity:0.75
    }
  });
  