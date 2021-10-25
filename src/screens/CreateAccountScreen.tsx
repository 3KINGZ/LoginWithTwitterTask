import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Input, Button } from "../components";
import { routes } from "../navigation/route";
import { COLORS } from "../styles";

export const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create Account</Text>

      <View style={{ width: "100%" }}>
        <Input placeholder="Your name" onChangeText={text => setName(text)} />
        <Input placeholder="Your email" onChangeText={text => setEmail(text)} />
        <Input
          placeholder="Choose password"
          isPassword
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={{ marginVertical: 10, width: "100%" }}>
        <Button
          disabled={!name || !password || !email}
          label="CONFIRM"
          onPress={() => navigation.navigate(routes.CreateTeam)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    // justifyContent: "space-evenly",
  },
  headerText: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
