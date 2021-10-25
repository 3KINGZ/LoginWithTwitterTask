import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { routes } from "./route";
import {
  CreateAccountScreen,
  CreateTeamScreen,
  VerifyCodeScreen,
} from "../screens";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../styles";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Icon
            name="arrow-left"
            color="black"
            size={20}
            style={{ paddingLeft: 10, fontWeight: "bold" }}
          />
        ),
        headerTitle: "",
      }}>
      <Stack.Screen
        name={routes.CreateAccount}
        component={CreateAccountScreen}
      />
      <Stack.Screen
        name={routes.CreateTeam}
        component={CreateTeamScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.blue,
                  marginRight: 10,
                  fontSize: 18,
                }}>
                Help
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={routes.VerifyCode} component={VerifyCodeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
