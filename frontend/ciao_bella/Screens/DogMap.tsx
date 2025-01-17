import { Text, View, StyleSheet, Pressable } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GlobalStyles } from "../constants/styles";
import Feather from "@expo/vector-icons/Feather";

export function DogMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        liteMode={true}
        region={{
          latitude: 54.4416,
          longitude: 18.5601,
          latitudeDelta: 0.01,
          longitudeDelta: 0.015,
        }}
        // showsPointsOfInterest={false}
      >
        <Marker
          coordinate={{
            latitude: 54.445,
            longitude: 18.555,
          }}
        />
        <Marker
          coordinate={{
            latitude: 54.435,
            longitude: 18.565,
          }}
        />
      </MapView>
      <View style={styles.floatingBtnContainer}>
        <Pressable style={styles.floatingBtn}>
          <Feather
            name="list"
            size={24}
            color={GlobalStyles.colors.primary400}
          />

          <Text>List View</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    // position:'relative'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  floatingBtnContainer: {
    position: "absolute",
    bottom: 20,
  },
  floatingBtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 99,
    backgroundColor: GlobalStyles.colors.primary50,
    borderColor: GlobalStyles.colors.primary400,
    borderWidth: 2,
    gap: 5,
    alignItems: "center",
  },
});
