import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPromo from './home/detail_promo';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, padding: '50px' }} accessibilityImage={false}>
      <TouchableHighlight onPress={() => navigation.navigate('Detail Promo')}>
        <Image
         style={styles.tinyLogo}
         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
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