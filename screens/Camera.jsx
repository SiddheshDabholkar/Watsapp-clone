import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Box, Text, HStack, VStack, Center } from 'native-base';
import CameraRecentPhotos from "../components/CameraRecentPhotos";
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraComponent({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState('off');

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

  const handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off');
    } else if (flashMode === 'off') {
      setFlashMode('auto');
    } else if (flashMode === "auto") {
      setFlashMode('on');
    }
  };

  // const __takePicture = async () => {
  //   const photo = await Camera.takePictureAsync();
  //   console.log(photo);
  //   setCapturedImage(photo);
  // };

  const switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front');
    } else {
      setCameraType('back');
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <Camera type={cameraType} style={{ flex: 1 }} >
        <VStack >
          <HStack h="80%" />
          <HStack h="20%">
            <VStack>
              <HStack h="40%">
                <CameraRecentPhotos />
              </HStack>

              <HStack space={1} h="60%" mt="5">
                <Box w="20%">
                  <Center>
                    <TouchableOpacity onPress={handleFlashMode}>
                      {
                        flashMode === "off" ?
                          <MaterialIcons name="flash-off" size={30} color="white" /> : flashMode === "auto" ?
                            <MaterialIcons name="flash-auto" size={24} color="white" /> : flashMode === "on" &&
                            <MaterialCommunityIcons name="flash" size={30} color="white" />
                      }
                    </TouchableOpacity>
                  </Center>
                </Box>
                <Box w="60%">
                  <Center>
                    <Entypo name="circle" size={65} color="white" />
                  </Center>
                </Box>
                <Box w="20%">
                  <Center>
                    <TouchableOpacity onPress={switchCamera}>
                      <Ionicons name="camera-reverse" size={30} color="white" />
                    </TouchableOpacity>
                  </Center>
                </Box>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Camera>
    </>
  );
}
