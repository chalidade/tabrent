import React from 'react';
import {View, Text, Button, Image, StyleSheet, TouchableHighlight} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: '!important',
    align: 'center',
    backgroundColor: '#FFFFFF'
  },
  tinyLogo: {
    width: 325,
    height: 156,
    borderRadius: 10,
    alignItems:'center',
    marginBottom : 10
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const TextStyle = StyleSheet.create({
  title: {
    color:'#2F2F8D',
    size : '20',
    fontWeight : 'bold',
    alignItems : 'left',
    paddingLeft : 10
  },

  description: {
    color:'#000000',
    fontWeight : 400,
    LineHeight : 24,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 15,
    alignItems:'center',
    justifyContent:'center',
    background: '#FFFFFF'

  },

  lite:{
    color:'#C8C8C8',
    size : '100',
    weight : '400',
    fontStyle : 'italic',
    align: 'left',
    paddingTop : 10,
    paddingLeft : 10
  }

});

export default function DetailPromo(){
  return(
    <View style={Styles.container}>
    <TouchableHighlight>
      <Image
      style={Styles.tinyLogo}
      source={require('../../../assets/home/image_1.svg')}
      />
    </TouchableHighlight>
    <Text
      style={TextStyle.title}>
      Tips untuk memilih kendaraan yang baik
    </Text>
    <Text
    style={TextStyle.lite}
    >
      01/01/2001
    </Text>
    <Text
      style={TextStyle.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
    </View>
  );
}
