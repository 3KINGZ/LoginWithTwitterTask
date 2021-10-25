import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS } from "../styles";

type InputAreaProps = {
  isPassword?: boolean;
} & TextInputProps;

export const Input = ({ isPassword, ...inputProps }: InputAreaProps) => {
  const [showSecureText, setShowSecureText] = useState(false);

  return (
    <>
      {isPassword ? (
        <View style={styles.secureInputContainer}>
          <TextInput
            secureTextEntry={showSecureText}
            {...inputProps}
            style={[styles.textInput, { flex: 1, marginVertical: 0 }]}
          />
          {showSecureText ? (
            <TouchableOpacity
              style={styles.inputBtnContainer}
              onPress={() => setShowSecureText(false)}>
              <Icon name="eye" size={20} color={COLORS.lightGrey} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.inputBtnContainer}
              onPress={() => setShowSecureText(true)}>
              <Icon name="eye-off" size={20} color={COLORS.grey} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TextInput {...inputProps} style={styles.textInput} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 35,
    paddingVertical: 15,
    marginVertical: 10,
    paddingLeft: 15,
    fontSize: 17,
  },
  secureInputContainer: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingRight: 15,
  },
  inputBtnContainer: {
    width: 30,
    // backgroundColor: "yellow",
    alignItems: "center",
  },
});
