import React from "react";
import { Text, View, Button } from "react-native";

export default function Status({ navigation }) {
  return (
    <View>
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      <Text>lmao</Text>
    </View>
  );
}
