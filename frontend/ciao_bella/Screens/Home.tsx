import { Text, View, StyleSheet, Image, ScrollView,Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SitterTilePotrait } from "../components/SitterTile";
import { HowItWorks } from "../components/HowItWorks";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GlobalStyles } from "../constants/styles";

export function Home() {
  return (
    <SafeAreaView>
      <View>
        <View>
            <Image source={require("../assets/banner.png")}/>
        </View>
        <Text style={styles.header1}>Feature Dog Sitters</Text>
        <ScrollView style={styles.featuredContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <SitterTilePotrait/>
            <SitterTilePotrait/>
            <SitterTilePotrait/>
            <SitterTilePotrait/>
        </ScrollView>
        <Text style={styles.header1}>How It Works</Text>
        <HowItWorks/>
        <Text style={styles.header1}>Want To Make Extra Money?</Text>
        <Pressable style={({pressed})=>[styles.pressContainer,pressed&&styles.pressed]}>
            <View style={styles.pressInner}>
            <Text>Register as <Text style={styles.wordFocus}>dogGo</Text> sitter</Text>
            <MaterialIcons name="navigate-next" size={40} color="black"/>
            </View>
        </Pressable>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:10,
    marginTop:20,
    paddingHorizontal:10
  },
  featuredContainer:{
    flexDirection:'row'
  },
  pressInner:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    paddingHorizontal:30,
    paddingVertical:7
  },
  pressContainer:{
    backgroundColor:"#FFDF5C",
    borderRadius:15,
    marginHorizontal:10
  },  wordFocus:{
    fontWeight:'600',
    fontSize:20
  },
  pressed:{
    opacity:0.75
  }
});
