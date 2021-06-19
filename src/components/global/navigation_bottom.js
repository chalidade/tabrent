import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    height: 65,
    width: "100%",
    paddingTop: 10,
    // boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  navItem: {
    flex: 0.25,
    textAlign: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
    color: "#C8C8C8",
  },
  navTextActive: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
    color: "#000080",
  },
  navIcon: {
    color: "#C8C8C8",
    fontSize: 20,
  },
  navIconActive: {
    color: "#000080",
    fontSize: 20,
  },
});

export default function navigation({
  back = false,
  value = "Back",
  navigation,
  url,
  screen = "home",
}) {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navItem}>
        <Ionicons
          name="ios-home"
          style={screen == "home" ? styles.navIconActive : styles.navIcon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={screen == "home" ? styles.navTextActive : styles.navText}>
          Home
        </Text>
      </View>
      <View style={styles.navItem}>
        <Ionicons
          name="ios-list"
          style={screen == "progress" ? styles.navIconActive : styles.navIcon}
          onPress={() => navigation.navigate("Booking")}
        />

        <Text
          style={screen == "progress" ? styles.navTextActive : styles.navText}
        >
          Progress
        </Text>
      </View>
      <View style={styles.navItem}>
        <Ionicons
          name="ios-notifications"
          style={
            screen == "notification" ? styles.navIconActive : styles.navIcon
          }
          onPress={() => navigation.navigate("Notification")}
        />
        <Text
          style={
            screen == "notification" ? styles.navTextActive : styles.navText
          }
        >
          Notification
        </Text>
      </View>
      <View style={styles.navItem}>
        <Ionicons
          name="ios-person"
          style={screen == "profile" ? styles.navIconActive : styles.navIcon}
          onPress={() => navigation.navigate("User")}
        />
        <Text
          style={screen == "profile" ? styles.navTextActive : styles.navText}
        >
          Profile
        </Text>
      </View>
    </View>
  );
}
