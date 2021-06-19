import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Navigation from "../../components/global/navigation_top";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home";
const Stack = createStackNavigator();

const Styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    height: "100%",
  },
  container: {
    marginTop:20,
    padding: 20,
  },
  tinyLogo: {
    width: "100%",
    height: 156,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const TextStyle = StyleSheet.create({
  title: {
    color: "#2F2F8D",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "flex-start",
    paddingLeft: 10,
  },

  description: {
    color: "#000000",
    fontWeight: "400",
    lineHeight: 24,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  lite: {
    color: "#C8C8C8",
    fontSize: 10,
    fontWeight: "400",
    fontStyle: "italic",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default function DetailPromo() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main({ navigation }) {
  return (
    <View style={Styles.screen}>
      <Navigation
        back={true}
        value="Detail Promo"
        navigation={navigation}
        url="Home"
      />
      <View style={Styles.container}>
        <TouchableHighlight>
          <Image
            style={Styles.tinyLogo}
            source={require("../../../assets/home/image_1.svg")}
          />
        </TouchableHighlight>
        <Text style={TextStyle.title}>
          Tips untuk memilih kendaraan yang baik
        </Text>
        <Text style={TextStyle.lite}>01/01/2001</Text>
        <Text style={TextStyle.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
}
