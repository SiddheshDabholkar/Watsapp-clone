import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Avatar, Button, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function ProfileAvatar() {
    const { navigate } = useNavigation();
    return (
        <Box style={styles.Parent}>
            <Pressable onPress={() => navigate("Profile Photo")}>
                <Avatar bg="amber.500" size="160" />
            </Pressable>
            <Box style={styles.Container}>
                <Button style={styles.ButtonStyles}
                    leftIcon={<Icon as={<Ionicons name="ios-camera" size={24} color="#fff" />} size="sm" />}
                    onPress={() => console.log("button bitch")} />
            </Box>
        </Box >
    );
}

const styles = StyleSheet.create({
    Parent: {
        position: "relative",
    },
    Container: {
        position: "absolute",
        padding: 110,
    },
    ButtonStyles: {
        borderRadius: 40,
        height: 50,
        width: 50,
    }
});