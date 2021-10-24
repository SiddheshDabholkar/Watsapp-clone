import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { Box, Center } from "native-base";

export default function CameraComponent() {
  const { height, width } = useWindowDimensions();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
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
