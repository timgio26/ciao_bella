import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GlobalStyles } from "../constants/styles";

export function HowItWorks() {
  return (
    <View style={styles.flowHorizontal}>
      <View style={styles.flowCircle1}>
        <Text style={styles.wordFocus}>Find</Text>
        <Text>Dog Sitter</Text>
      </View>
      <MaterialIcons name="navigate-next" size={40} color="black" />
      <View style={styles.flowCircle2}>
        <Text style={styles.wordFocus}>Drop off</Text>
        <Text>pup</Text>
      </View>
      <MaterialIcons name="navigate-next" size={40} color="black"/>
      <View style={styles.flowCircle3}>
      <Text style={styles.wordFocus}>Enjoy</Text>
      <Text>vacation</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flowHorizontal: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
  },
  flowCircle1: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:GlobalStyles.colors.primary50,
    justifyContent:'center',
    alignItems:'center'
  },
  flowCircle2: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:GlobalStyles.colors.primary100,
        justifyContent:'center',
    alignItems:'center'
  },
  flowCircle3: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:"#FFDF5C",
        justifyContent:'center',
    alignItems:'center'
  },
  wordFocus:{
    fontWeight:'600',
    fontSize:20
  }
});
