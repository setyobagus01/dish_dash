import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "../../components";
import { StackParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { colors } from "../../utils/colors";

type HomeProps = NativeStackScreenProps<StackParams, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home View!</Text>
      <Button
        item="Gyutto"
        onPress={(item) => navigation.navigate("Cart", { item })}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
