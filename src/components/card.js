import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function card() {
  return (
    // implemented with Text and Button as children
    <Card>
      <Card.Title>
        <Text>HELLO WORLD</Text>
      </Card.Title>
      <Card.Divider />
      <Card.Image source={require("../../assets/home/image_4.svg")}>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        >
          VIEW NOW
        </Button>
      </Card.Image>
    </Card>
  );
}
