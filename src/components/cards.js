import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-elements';

const TextStyle = StyleSheet.create({
price: {
    color:'#000080',
    fontSize : 12,
    fontWeight : 'bold',
    alignItems: "flex-start",
    paddingLeft : 5,
    paddingTop : 7,
    lineHeight : 15
  },

  owner: {
    color:'#000000',
    fontWeight : '700',
    fontSize : 8,
    lineHeight : 9,
    textAlign:'left',
    // fontStyle : 'Calibri',
    paddingLeft : 5,

  },

  carName:{
    color:'#000000',
    fontSize : 6,
    fontWeight : '400',
    textAlign: 'left',
    // fontStyle : 'Calibri',
    paddingLeft : 5
  }

});

export default function cards(){
  return (

      // implemented with Text and Button as children
      <Card containerStyle={{height:141, width:105}}>
        <Card.Image source={require('../../assets/home/image_4.svg')}
        style={{
          width:70,
          height:70,
          justifyContent: 'center'
        }}>
        </Card.Image>
        <Text style={TextStyle.owner}>Pak Rahmat</Text>
        <Text style={TextStyle.carName}>Daihatsu Ayla</Text>
        <Text style={TextStyle.price}>Rp. 250.000 </Text>
        <Image source={require('../../assets/home/star-vector.svg')} style={{ width: 10, height: 10 }} />
        <Image source={require('../../assets/home/star-vector.svg')} style={{ width: 10, height: 10 }} />
        <Image source={require('../../assets/home/star-vector.svg')} style={{ width: 10, height: 10 }} />
      </Card>

  );
}
