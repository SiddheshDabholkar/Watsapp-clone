import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import { Camera } from "expo-camera";


export default function CameraComponent({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return <Camera type={type} style={{ flex: 1, height: "50%" }} />;
}