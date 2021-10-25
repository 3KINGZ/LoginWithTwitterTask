import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS } from "../styles";

interface IButton {
  label: string;
  onPress?: () => any;
  disabled?: boolean;
}

export const Button = ({ label, onPress, disabled }: IButton) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: disabled ? COLORS.blue2 : COLORS.blue },
      ]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    alignItems: "center",
    borderRadius: 35,
    paddingVertical: 15,
    marginVertical: 10,
  },
  label: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});
