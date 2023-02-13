import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../utils";

interface ButtonProps {
  item: string;
  onPress: (item: string) => void;
}

const Button = ({ onPress, item }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Text style={styles.text}>Button Component!</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
});
