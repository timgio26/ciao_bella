import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { SitterTile } from "../components/SitterTile";
import AntDesign from "@expo/vector-icons/AntDesign";
import { GlobalStyles } from "../constants/styles";
import { useEffect, useState } from "react";
import {dogsitter,dogSitters} from '../utils/fakeDB'
import Entypo from "@expo/vector-icons/Entypo";
import OptionModals from "../components/OptionModals";



export function SitterList() {
  const [search, setSearch] = useState<string>();
  const [filtered, setFiltered] = useState<dogsitter[]>(dogSitters);
  const [mdlVis, setMdlVis] = useState<boolean>(false);

  useEffect(() => {
    if (search) {
      setFiltered(
        filtered.filter((each) => each.name.toLowerCase().includes(search))
      );
    } else {
      setFiltered(dogSitters);
    }
  }, [search]);

  function handleSearchInput(input: string) {
    setSearch(input);
  }

  // function handleSearchBtn(){
  //   // console.log(search)
  //   if(search) {
  //     setFiltered(filtered.filter((each)=>each.name.toLowerCase().includes(search)))
  //   }
  //   else{
  //     setFiltered(dogSitters)
  //   }
  // }

  return (
    <View>
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
      {/* <View

      >
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          style={{ backgroundColor: "green", display: "flex" }}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View> */}

      {/* <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}        
      style={{}}
    /> */}

      <View style={{ margin: 10, flexDirection: "row" }}>
        <Pressable style={styles.sortByCntr} onPress={()=>setMdlVis(true)}>
          <Text>Sort by</Text>
          <Entypo name="chevron-small-down" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        {filtered.map((each, index) => {
          return <SitterTile key={index} data={each} />;
        })}
      </ScrollView>
      <OptionModals isVisible={mdlVis} onClose={() => setMdlVis(false)}>
        <View><Text>Option1</Text></View>
        <View><Text>Option2</Text></View>
        <View><Text>Option3</Text></View>
      </OptionModals>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 20,
    fontWeight: "bold",
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
