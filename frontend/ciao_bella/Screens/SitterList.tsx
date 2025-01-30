import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Orderdb } from "../utils/fakeDB";
import { GlobalStyles } from "../constants/styles";

type OrderTileProp = {
  data: Orderdb;
};

export function OrderTile({ data }: OrderTileProp) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.orderId}>{data.order_id}</Text>
        <Text style={data.order_status=="active"?{color:'green',fontWeight:'900'}:{color:'gray',fontWeight:'900'}}>{data.order_status}</Text>
      </View>

      <Text>
        {data.order_start_date.toDateString()} -{" "}
        {data.order_end_date.toDateString()}
      </Text>

      <Text>Dog sitter: {data.dogsitter_name}</Text>
      <Text>for {data.num_of_dog} dog(s)</Text>

      <Text style={styles.totalPrice}>Total: {data.total_price}zl</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: GlobalStyles.colors.primary400,
    elevation: 2,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: {
    fontWeight: "900",
    color: GlobalStyles.colors.primary400,
  },
  totalPrice: {
    textAlign: "right",
    fontWeight: "900",
    fontSize: 20,
  },
});
