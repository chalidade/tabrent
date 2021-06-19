import * as React from "react";
import { Button, View, Text, AppRegistry } from "react-native";
import Home from "./src/screens/home";
import Notification from "./src/screens/notification";
import Booking from "./src/screens/booking";
import User from "./src/screens/user";
import NavigationBottom from "./src/components/navigation_bottom";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "History") {
              iconName = focused ? "ios-list" : "ios-list";
            } else if (route.name === "Notification") {
              iconName = focused ? "ios-notifications" : "ios-notifications";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#000080",
          inactiveTintColor: "#C8C8C8",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={Booking} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
