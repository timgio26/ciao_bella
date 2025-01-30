import { View, Text } from "react-native";
import { Orderdb } from "../utils/fakeDB";
import { GlobalStyles } from "../constants/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

type OrderTileProp = {
  data: Orderdb;
};

export function OrderTile({ data }: OrderTileProp) {
  return (
    <View
      style={{
        borderWidth: 2,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal:15,
        borderRadius: 20,
        borderColor: GlobalStyles.colors.primary400,
        elevation:2,
        backgroundColor:"white"
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{fontWeight:"900",color:GlobalStyles.colors.primary400}}>{data.order_id}</Text>
        <Text>{data.order_status}</Text>
      </View>

      <Text>
        {data.order_start_date.toDateString()} -{" "}
        {data.order_end_date.toDateString()}
      </Text>

      <Text>Dog sitter: {data.dogsitter_name}</Text>
      <Text>for {data.num_of_dog} dog(s)</Text>

      <Text style={{ textAlign: "right", fontWeight: "900", fontSize: 20 }}>
        Total: {data.total_price}zl
      </Text>
    </View>
  );
}
