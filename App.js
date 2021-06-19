import * as React from "react";
import { Button, View, Text, AppRegistry } from "react-native";
import Home from "./src/screens/home";
import Notification from "./src/screens/notification";
import Booking from "./src/screens/booking";
import User from "./src/screens/user";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function App() {
  return <User />;
}

export default App;
