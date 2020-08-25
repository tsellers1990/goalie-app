import React from "react";
import { Button, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";



export const HomeScreen = () => {
<View
  style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFFF",
  }}
>
  <Icon.Button
    name="ios-menu"
    size={25}
    color="black"
    backgroundColor="#FFFFFFF"
    onPress={() => navigation.openDrawer()}
  ></Icon.Button>

  <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
  <Button
    onPress={() => navigation.navigate("Notifications")}
    title="Add a New Goal"
  />
</View>;

}
