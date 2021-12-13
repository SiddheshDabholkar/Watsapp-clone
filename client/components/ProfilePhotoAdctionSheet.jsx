import React, { useState, useEffect } from 'react';
import {
    Button,
    Actionsheet,
    Box,
    Text,
    HStack,
    Center,
    VStack,
    Heading
} from 'native-base';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export const OpenImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    return pickerResult;
};

export const OpenCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
        // setPickedImagePath(result.uri);
        console.log(result.uri);
    }
};

export default function ProfilePhotoAdctionSheet({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator >
            <Actionsheet.Content borderTopRadius="0" bg="#111827">
                <Box alignItems="flex-start" w="100%" h={170} p={2} >
                    <Heading color="#fff">Profile photo</Heading>
                    <Center>
                        <HStack mt={7} space={3}>
                            <VStack w="20%">
                                <Center>
                                    <Button
                                        bg="red.500"
                                        style={styles.Button}
                                        leftIcon={
                                            <MaterialIcons name="delete" size={24} color="black" />
                                        }></Button>
                                    <Text color="#fff">Remove photo</Text>
                                </Center>
                            </VStack>
                            <VStack w="20%">
                                <Center>
                                    <Button
                                        style={styles.Button}
                                        onPress={OpenImagePickerAsync}
                                        leftIcon={
                                            <Entypo name="image-inverted" size={24} color="black" />
                                        }>
                                    </Button>
                                    <Text color="#fff">Gallery</Text>
                                </Center>
                            </VStack>
                            <VStack w="20%">
                                <Center>
                                    <Button
                                        bg="blue.400"
                                        style={styles.Button}
                                        onPress={OpenCamera}
                                        leftIcon={
                                            <Ionicons name="ios-camera" size={24} color="black" />
                                        } />
                                    <Text color="#fff">Camera</Text>
                                </Center>
                            </VStack>
                        </HStack>
                    </Center>
                    {/* </VStack> */}
                </Box>
            </Actionsheet.Content>
        </Actionsheet >
    );
}

const styles = StyleSheet.create({
    Button: {
        height: 50,
        width: 50,
        borderRadius: 50,
    }
});
