import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPromo from './home/detail_promo';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingLeft:15,
      paddingRight:15
    },
    tinyLogo: {
      width: '100%',
      height: 160,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate('Detail Promo')}>
        <Image
         style={styles.tinyLogo}
         source={require('../../assets/home/banner_1.svg')}
      />
      </TouchableHighlight>
      </View>
    );
  }
  
function Home() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail Promo" component={DetailPromo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Home;