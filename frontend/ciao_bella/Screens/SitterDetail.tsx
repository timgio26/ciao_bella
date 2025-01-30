import { Text, View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { dogSitters,ReviewList} from "../utils/fakeDB";
import { GlobalStyles } from "../constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ReviewTile } from "../components/ReviewTile";
import { useState } from "react";
import { FloatingBtn } from "../components/FloatingBtn";

type SitterDetailRouteProp = RouteProp<RootStackParamList, "SitterDetail">;

export function SitterDetail() {
  const route = useRoute<SitterDetailRouteProp>();
  const navigation = useNavigation()
  const [liked,setLiked] = useState<boolean>(false)
  // console.log(liked)

  const { id } = route.params;

  const dogSitterDtl = dogSitters.filter((each) => each.id === id)[0];

  function handleBook(){
    console.log('book')
    navigation.navigate("CreateOrder")
  }

  return (
    <View >

    <ScrollView>
      <View style={styles.imgInfoCnt}>
        <View style={styles.imgLoveCnt}>
          <View style={styles.imgProfileCnt}>
            <Image
              source={require("../assets/profile-basic.png")}
              style={styles.imgProf}
            />
          </View>
          <Pressable style={styles.loveCnt} onPress={()=>setLiked((state)=>!state)}>
            <AntDesign name="heart" size={30} color={liked?"red":"#ededed"} />
          </Pressable>
        </View>
        <Text style={styles.header1}>{dogSitterDtl.name}</Text>
        <Text style={styles.header2}>{dogSitterDtl.city}</Text>
        <View style={styles.starCnt}>
          <Text>{"⭐".repeat(Math.round(dogSitterDtl.rating))}</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            {dogSitterDtl.rating}
          </Text>
        </View>
      </View>
      {/* <View> */}
      <View style={{gap:10,paddingBottom:45}}>
        <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",marginVertical:15}}>Review</Text>
        {ReviewList.map((each)=><ReviewTile data={each} key={each.review_id}/>)}
      </View>
      {/* </View> */}

      
    </ScrollView>
    <View style={{alignItems:'center'}}>
      {/* <Text>hello</Text> */}

      <FloatingBtn label="Book" onpress={handleBook}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 24,
    fontWeight: "300",
  },
  header2: {
    fontSize: 18,
    fontWeight: "600",
  },
  imgInfoCnt: {
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
  },
  imgLoveCnt: { position: "relative", marginVertical: 25 },
  imgProfileCnt: {
    width: 275,
    height: 275,
    overflow: "hidden",
    borderRadius: 150,
    borderColor: GlobalStyles.colors.primary100,
    borderWidth: 7,
  },
  imgProf: { width: "auto", height: 275 },
  loveCnt: {
    position: "absolute",
    right: 15,
    bottom: 25,
    width: 50,
    height: 50,
    borderColor: GlobalStyles.colors.primary100,
    backgroundColor: "white",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  starCnt: {
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 99,
    flexDirection: "row",
    gap: 10,
  },
});
