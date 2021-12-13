import React from 'react';
import { FlatList } from 'react-native';
import { VStack, HStack, Text } from 'native-base';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const List = [
    { id: 1, name: "Document", icon: <Ionicons name="ios-document" size={24} color="black" /> },
    { id: 2, name: "Camera", icon: <FontAwesome name="camera" size={24} color="black" /> },
    { id: 3, name: "Gallery", icon: <Ionicons name="image" size={24} color="black" /> },
    { id: 4, name: "Audio", icon: <FontAwesome5 name="headphones" size={24} color="black" /> },
    { id: 5, name: "Payment", icon: <FontAwesome name="rupee" size={24} color="black" /> },
    { id: 6, name: "Location", icon: <Ionicons name="md-location-sharp" size={24} color="black" /> },
    { id: 7, name: "Contact", icon: <Ionicons name="md-person" size={24} color="black" /> },
];

export default function Attachment() {
    const renderItem = ({ item }) => (
        <Box bg="red.500">{item.name}</Box>
    );
    return (
        <VStack>
            <HStack bg="blue.500">
                <FlatList
                    data={List}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </HStack>
        </VStack>
    );
}
