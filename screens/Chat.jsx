import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { HStack, Box, VStack, Center, useDisclose } from 'native-base';
import StatusReplyModal from '../components/StatusReplyModal';

export default function Chat({ navigation }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HStack space={6}>
                    <TouchableOpacity >
                        <FontAwesome5 name="video" size={18} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Ionicons name="md-call" size={18} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Entypo name="dots-three-vertical" size={18} color="black" />
                    </TouchableOpacity>
                </HStack>
            )
        });
    }, [navigation]);
    return (
        <>
            <Box flex={1} bg="#111827" p="4">
                <VStack>
                    <Center>
                        <Box h="95%">
                            <Text>bruh</Text>
                        </Box>
                        <Box h="5%">
                            <Pressable onPress={onOpen}>
                                <Text>bruh</Text>
                            </Pressable>
                        </Box>
                    </Center>
                </VStack>
            </Box>
            <StatusReplyModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}
