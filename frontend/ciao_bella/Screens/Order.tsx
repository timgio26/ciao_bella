import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { ordersdb, Orderdb } from "../utils/fakeDB";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import OptionModals from "../components/OptionModals";
import { OrderTile } from "../components/OrderTile";

export function Order() {
  const [search, setSearch] = useState<string>();
  const [mdlVis, setMdlVis] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<Orderdb[]>(ordersdb);

//   console.log(filtered);
  //   const [filtered, setFiltered] = useState<dogsitter[]>(dogSitters);

  //   useEffect(() => {
  //     if (search) {
  //       setFiltered(
  //         filtered.filter((each) => each.name.toLowerCase().includes(search))
  //       );
  //     } else {
  //       setFiltered(dogSitters);
  //     }
  //   }, [search]);

  function handleSearchInput(input: string) {
    setSearch(input);
  }

  return (
    <View style={{flex:1}}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.header1}>My Booking</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={{ flexGrow: 1, fontSize: 16 }}
          onChangeText={handleSearchInput}
          value={search}
        />
        <View
          style={{ paddingHorizontal: 10, paddingVertical: 8 }}
          // onPress={handleSearchBtn}
        >
          <AntDesign
            name="search1"
            size={24}
            color={GlobalStyles.colors.primary400}
          />
        </View>
      </View>

      <View style={{ margin: 10, flexDirection: "row" }}>
        <Pressable style={styles.sortByCntr} onPress={() => setMdlVis(true)}>
          <Text>Sort by</Text>
          <Entypo name="chevron-small-down" size={24} color="black" />
        </Pressable>
      </View>
      
      <ScrollView style={{flexGrow:1}}>
        {filtered.map((each) => (
          <OrderTile key={each.order_id} data={each} />
        ))}
      </ScrollView>

      <OptionModals isVisible={mdlVis} onClose={() => setMdlVis(false)}>
        <View>
          <Text>Option1</Text>
        </View>
        <View>
          <Text>Option2</Text>
        </View>
        <View>
          <Text>Option3</Text>
        </View>
      </OptionModals>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 20,
    fontWeight: "100",
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 9,
    paddingHorizontal: 10,
    paddingVertical: 1,
    gap: 10,
    borderWidth: 2,
    margin: 10,
    borderColor: GlobalStyles.colors.primary400,
    borderRadius: 10,
  },
  sortByCntr: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 99,
  },
});
