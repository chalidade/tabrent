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
    backgroundColor: "#2F2F8D",
    height: 110,
    padding: 20,
    flexDirection: "row",
  },
  profilePict: {
    backgroundColor: "#fff",
    padding: 12,
    width: 55,
    height: 55,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 10,
  },
  profilePictText: {
    color: "#2F2F8D",
    fontSize: 24,
    fontWeight: "700",
  },
  verifiedBox: {
    width: 90,
    backgroundColor: "#D60000",
    textAlign: "center",
    padding: 8,
    marginTop: 15,
    borderRadius: 5,
  },
});

const textStyle = StyleSheet.create({
  title: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  subTitle: {
    fontSize: 10,
    color: "#FFF",
  },
  verifiedText: {
    fontSize: 12,
    color: "#FFF",
  },
  formSearch: {
    flexDirection: "row",
    height: 49,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
});

export default function navigation({
  back = false,
  value = "Back",
  navigation,
  url,
}) {
  return (
    <View style={styles.navContainer}>
      <View style={{ flex: 0.25 }}>
        <View style={styles.profilePict}>
          <Text style={styles.profilePictText}>TA</Text>
        </View>
      </View>
      <View style={{ flex: 0.45 }}>
        <Text style={textStyle.title}>Tabrent Apps</Text>
        <Text
          style={textStyle.subTitle}
          onPress={() => navigation.navigate("Info")}
        >
          Account Information
        </Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <View style={styles.verifiedBox}>
          <Text style={textStyle.verifiedText}>Not Verified</Text>
        </View>
      </View>
    </View>
  );
}
