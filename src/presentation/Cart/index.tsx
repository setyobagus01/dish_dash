import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackParams } from "../../App";

type CartProps = NativeStackScreenProps<StackParams, "Cart">;

const Cart = ({ route }: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>Cart View!</Text>
      <Text>{route.params.item}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
