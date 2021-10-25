/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../styles";

export const VerifyCodeScreen = () => {
  const [focusState, setFocusState] = useState({
    input1: true,
    input2: false,
    input3: false,
    input4: false,
  });

  const [values, setValues] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  useEffect(() => {
    if (values.value1) {
      ref_input2.current.focus();
    } else if (values.value2) {
      ref_input3.current.focus();
    } else if (values.value3) {
      ref_input4.current.focus();
    }
  }, [values]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Verify Code</Text>
        <Text style={styles.subHeaderText}>
          We have send you a code to verify your email{" "}
          <Text style={styles.linkText}>phutuong@gmail.com</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignSelf: "center",
          marginVertical: 30,
        }}>
        <TextInput
          maxLength={1}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={text => setValues({ ...values, value1: text })}
          style={{ width: 50, borderColor: "black", borderBottomWidth: 1 }}
          keyboardType="number-pad"
        />
        <TextInput
          maxLength={1}
          style={{ width: 50, borderColor: "black", borderBottomWidth: 1 }}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
          onChangeText={text => setValues({ ...values, value2: text })}
          keyboardType="number-pad"
        />
        <TextInput
          maxLength={1}
          style={{ width: 50, borderColor: "black", borderBottomWidth: 1 }}
          returnKeyType="next"
          // onSubmitEditing={() => ref_input4.current.focus()}
          ref={ref_input3}
          onChangeText={text => setValues({ ...values, value3: text })}
          keyboardType="number-pad"
        />
        <TextInput
          maxLength={1}
          style={{ width: 50, borderColor: "black", borderBottomWidth: 1 }}
          ref={ref_input4}
          onChangeText={text => setValues({ ...values, value4: text })}
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.helperTextContainer}>
        <Text style={styles.subHeaderText}>Didn't receive the code?</Text>
        <Text style={styles.linkText}>Resend</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subHeaderText: {
    fontSize: 17,
    width: "80%",
  },
  linkText: {
    fontSize: 17,
    color: COLORS.blue,
    textAlign: "center",
  },
  helperTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
