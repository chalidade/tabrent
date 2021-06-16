import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#fff",
      height:85,
      padding:20
    },
    formSearch : {
      flexDirection: "row",
      height:49,
      backgroundColor:"#EAEAEA"
    },
    inputSearch : {
        width:'100%',
        height:49,
    }
  });

export default function navigation() {
    return (      
    <View style={styles.container}>
    <View style={styles.formSearch}>
      <View style={{flex: 0.15 }}> <Ionicons name="ios-person" size="3vh" color="#fff" /> </View>
      <View style={{flex: 0.65 }} >
        <TextInput style={styles.inputSearch} defaultValue="Search" />
      </View>
      <View style={{flex: 0.2 }}></View>
    </View>
    </View>
    );
}