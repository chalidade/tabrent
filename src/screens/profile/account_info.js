import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationTop from "../../components/global/navigation_top";
import Profile from "../../screens/user";
import NavigationBottom from "../../components/global/navigation_bottom";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  screenMenu: {
    padding: 25,
  },
});

function Main({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <NavigationTop
        value="Account Info"
        navigation={navigation}
        back="true"
        url="Profile"
      />
      <View style={styles.screenMenu}>
        <Text> Account Info </Text>
      </View>
    </View>
  );
}

function Route() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
