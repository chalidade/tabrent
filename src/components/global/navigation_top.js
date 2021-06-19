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
    backgroundColor: "#fff",
    height: 85,
    padding: 20,
    // boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  },
  formSearch: {
    flexDirection: "row",
    height: 49,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  textBack: {
    position: "absolute",
    top: 24,
    left: 70,
    fontSize: 22,
    fontWeight: '600',
    color: "#2F2F80",
  },
  inputSearch: {
    paddingLeft: 55,
    width: "100%",
    height: 49,
    fontWeight: "bold",
    color: "#535353",
  },
  inputSearchIcon: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  inputSearchQrIcon: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  inputSearchArrowIcon: {
    position: "absolute",
    top: 22,
    left: 25,
  },
});

export default function navigation({
  back = false,
  value = "Back",
  navigation,
  url,
}) {
  if (back) {
    return (
      <View style={styles.navContainer}>
        <Ionicons
          onPress={() => navigation.navigate(url)}
          style={styles.inputSearchArrowIcon}
          name="ios-arrow-back"
          size="4vh"
          color="#2F2F80"
        />
        <Text style={styles.textBack}>{value}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.navContainer}>
        <View style={styles.formSearch}>
          <Ionicons
            style={styles.inputSearchIcon}
            name="ios-search"
            size="3vh"
            color="#C8C8C8"
          />
          <TextInput style={styles.inputSearch} placeholder="Search" />
          <Ionicons
            style={styles.inputSearchQrIcon}
            name="ios-barcode"
            size="3vh"
            color="#C8C8C8"
          />
        </View>
      </View>
    );
  }
}
