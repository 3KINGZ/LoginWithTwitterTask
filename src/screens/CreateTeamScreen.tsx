import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Button, Input } from "../components";
import { routes } from "../navigation/route";
import { COLORS } from "../styles";

export const CreateTeamScreen = ({ navigation }: any) => {
  const [teamName, setTeamName] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.headerText}>Create a new team</Text>
        <Text style={styles.subHeaderText}>Please give your team a name</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Input
          placeholder="Write here"
          onChangeText={text => setTeamName(text)}
        />
        <Button
          label="CONFIRM"
          disabled={!teamName}
          onPress={() => navigation.navigate(routes.VerifyCode)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.linkText}>Or join an existing team</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subHeaderText: {
    fontSize: 17,
    color: COLORS.greyText,
  },
  linkText: {
    fontSize: 17,
    color: COLORS.blue,
    textAlign: "center",
  },
});
