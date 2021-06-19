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
import DetailPromo from "./home/detail_promo";
import User from "./user";
import Home from "./home";
import Booking from "./booking";
import Navigation from "../components/global/navigation_top";
import NavigationBottom from "../components/global/navigation_bottom";
import Cards from "../components/cards";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: "20px",
  },
  banner: {
    width: "100%",
    height: 160,
    borderRadius: "10px",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function Main({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Navigation />
      <Text> Notification </Text>
      <NavigationBottom navigation={navigation} screen="notification" />
    </View>
  );
}

function Banner({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate("Detail Promo")}>
        <Image
          style={styles.banner}
          source={require("../../assets/home/banner_1.svg")}
        />
      </TouchableHighlight>
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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail Promo"
          component={DetailPromo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
