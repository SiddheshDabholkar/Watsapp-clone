import React from 'react';
import { View } from 'react-native';
import { Box, VStack, HStack, Center, Text, Icon, Heading, Button } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Linkedevices() {
    return (
        <Box flex={1} bg="#000">
            <VStack>
                <Center bg="#111827">
                    <VStack >
                        <Center mt={2}>
                            <Icon
                                as={MaterialIcons}
                                name="devices"
                                size={24}
                                color="gray.700"
                            />
                        </Center>
                        <Center mt={4}>
                            <Heading color="#fff">Use WhatsApp on other devices</Heading>
                        </Center>
                        <Center mt="5" mb="4">
                            <Button w="sm">
                                LINK A DEVICE
                            </Button>
                        </Center>
                    </VStack>
                </Center>
                <Center bg="#111827" mt="2">
                    <HStack>
                        <Center w="20%">
                            <Icon as={MaterialCommunityIcons} name="flask-empty" size={6} color="green.500" />
                        </Center>
                        <VStack w="80%">
                            <Text color="#fff" bold>Multi-device beta</Text>
                            <Text color="#fff">Use up to 4 devices without keeping your phone online.Tap to learn more.</Text>
                        </VStack>
                    </HStack>
                </Center>
                <Center bg="#111827" mt="2" p={4}>
                    <VStack>
                        <Text color="#fff" bold>DEVICE STATUS</Text>
                        <Text color="#fff">Tap a device to log out</Text>
                        <HStack mt="6">
                            <VStack w="15%"></VStack>
                            <VStack w="85%">
                                <Text color="#fff">Google chrome (Linux)</Text>
                                <Text color="#fff">Last active October 29,7:44 PM</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Center>
            </VStack>
        </Box>
    );
}
