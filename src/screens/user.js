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
import Notification from "./notification";
import Home from "./home";
import Booking from "./booking";
import Info from "./profile/account_info";
import NavigationProfile from "../components/profile/navigation";
import NavigationBottom from "../components/global/navigation_bottom";
import Cards from "../components/cards";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    height: "100%",
  },
  screenMenu: {
    padding: 25,
  },
  screenMenuItem: {
    marginTop: 25,
  },
  hr: {
    border: "1px solid #C8C8C8",
  },
  textMenu: {
    fontSize: 18,
  },
  textMenuEmergency: {
    fontSize: 18,
    color: "#D60000",
    fontWeight: 600,
  },
  textMenuLogout: {
    fontSize: 18,
    color: "#D60000",
  },
  iconMenu: {
    width: 22,
    height: 22,
    position: "absolute",
    right: 10,
  },
});

function Main({ navigation }) {
  return (
    <View style={styles.screen}>
      <NavigationProfile navigation={navigation}/>
      <View style={styles.screenMenu}>
        <View>
          <Text style={styles.textMenu}> Became a rental Owner </Text>
          <Image
            style={styles.iconMenu}
            source={require("../../assets/icon/icon_market.svg")}
          />
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.screenMenu}>
        <View>
          <Text style={styles.textMenu}> My Favorite </Text>
          <Image
            style={{
              width: 25,
              height: 22,
              position: "absolute",
              right: 10,
            }}
            source={require("../../assets/icon/icon_love.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Feedbacks </Text>
          <Image
            style={{
              width: 25,
              height: 22,
              position: "absolute",
              right: 10,
            }}
            source={require("../../assets/icon/icon_star_outline.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Referal Code </Text>
          <Image
            style={{
              width: 25,
              height: 22,
              position: "absolute",
              right: 10,
            }}
            source={require("../../assets/icon/icon_referal_code.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Share to Your Friend </Text>
          <Image
            style={{
              width: 22,
              height: 25,
              position: "absolute",
              right: 10,
            }}
            source={require("../../assets/icon/icon_share_device.svg")}
          />
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.screenMenu}>
        <View>
          <Text style={styles.textMenuEmergency}> Emergency Call </Text>
          <Image
            style={styles.iconMenu}
            source={require("../../assets/icon/icon_emergency.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Contact Us </Text>
          <Image
            style={styles.iconMenu}
            source={require("../../assets/icon/icon_contact_us.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Get Help </Text>
          <Image
            style={{
              width: 22,
              height: 25,
              position: "absolute",
              right: 10,
            }}
            source={require("../../assets/icon/icon_help.svg")}
          />
        </View>
        <View style={styles.screenMenuItem}>
          <Text style={styles.textMenu}> Rate Us </Text>
          <Image
            style={styles.iconMenu}
            source={require("../../assets/icon/icon_like.svg")}
          />
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.screenMenu}>
        <View>
          <Text style={styles.textMenuLogout}> Logout </Text>
          <Image
            style={styles.iconMenu}
            source={require("../../assets/icon/icon_logout.svg")}
          />
        </View>
      </View>
      <NavigationBottom navigation={navigation} screen="profile" />
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
          name="Info"
          component={Info}
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
          name="Notification"
          component={Notification}
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
