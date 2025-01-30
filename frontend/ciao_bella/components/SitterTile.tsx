import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { dogsitter } from '../utils/fakeDB';
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../App";

type SitterTileProp = {
    data: dogsitter;
};

export function SitterTile({ data }: SitterTileProp) {
  const navigation = useNavigation<StackNavigation>();

    const roundedRating = Math.round(data.rating)

    function handlePress(){
      navigation.navigate("SitterDetail",{id:data.id})
    }
  return (
    <Pressable onPress={handlePress} style={({pressed})=>[styles.container,pressed&&{opacity:0.75}]}>
      <View style={styles.imgplaceholder}>
        <Text>no img</Text>
      </View>
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.text}>
        <Text style={styles.rating}>{"⭐".repeat(roundedRating)}</Text>
        {data.rating}
        </Text>
        <Text style={styles.text}>{data.pricePerDay} PLN per day</Text>
        <Text style={styles.city}>{data.city}</Text>
      </View>
    </Pressable>
  );
}

type SitterTilePotraitProp = {
  data:dogsitter
}


export function SitterTilePotrait({data}:SitterTilePotraitProp){
  const navigation = useNavigation<StackNavigation>()
  function handlePress(){
    navigation.navigate("Dog")
  }
  return (
    <Pressable style={styles.tilePotrait} onPress={handlePress}>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ position: "relative" }}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/profile-basic.png")}
              style={styles.imgProfile}
            />
          </View>
          <View
            style={[
              styles.ratingContainer,
              { position: "absolute", right: 10, bottom: 0 },
            ]}
          >
            <Text>{data.rating}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.name}>{data.name}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{data.city}</Text>
        <Text>{data.pricePerDay} PLN</Text>
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderColor: GlobalStyles.colors.primary400,
    borderWidth: 2,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    // flex:1,
    // overflow:'hidden'
    
    // marginBottom: 5,
  },
  city: {
    fontSize: 16,
    color: "#888",
    // marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: "#ffd700",
    // marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  imgplaceholder: {
    width: 100,
    height: 100,
    borderRadius: 999,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  tilePotrait: {
    borderWidth: 2,
    elevation: 2,
    backgroundColor:'white',
    borderColor: GlobalStyles.colors.primary400,
    padding:10,
    marginHorizontal:5,
    borderRadius:10,
    width:155,
    height:200,
    justifyContent:'space-between'
  },
  imgContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor:"blue",
    overflow:'hidden'
  },
  imgProfile: {
    width:"auto",
    height: 120,
  },
  ratingContainer: {
    width: 30,
    height: 30,
    borderRadius:15,
    backgroundColor:GlobalStyles.colors.primary100,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',right:10,bottom:0
  },
});
