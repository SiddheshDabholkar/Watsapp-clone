import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, VStack, HStack, Button, Actionsheet, Box, Icon, Image, Center } from 'native-base';
import { MaterialIcons, Ionicons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';

export default function StatusReplyModal({ isOpen, onOpen, onClose, img }) {
    const [text, onChangeText] = useState("");
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content borderTopRadius="0" bg="transparent" >
                <HStack p="2">
                    {/* reply modal */}
                    <VStack w="85%" bg="#111827" p="2" borderRadius="10">
                        <HStack bg="red.500" borderRadius="6">
                            <VStack w="85%">
                                <HStack>
                                    <Text color="#fff">bruh</Text>
                                    <Text bold color="#fff">{'\u2022'}</Text>
                                    <Text color="#fff">Symbol</Text>
                                </HStack>
                                <HStack>
                                    <Ionicons name="image" size={20} color="black" />
                                    <Text>
                                        Image
                                    </Text>
                                </HStack>
                            </VStack>
                            <VStack w="25%" p="1">
                                <Image
                                    alt="Alternate Text"
                                    source={{ uri: img }}
                                    style={styles.image}
                                />
                            </VStack>
                        </HStack>
                        <HStack height="8" p="1">
                            <Box w="10%">
                                <Center>
                                    <FontAwesome5 name="smile" size={20} color="#a3a3a3" />
                                </Center>
                            </Box>
                            <Box w="70%">
                                <TextInput
                                    onChangeText={onChangeText}
                                    value={text}
                                    style={styles.textInputStyle}
                                />
                            </Box>
                            <Box w="10%" >
                                <Center>
                                    <Entypo name="attachment" size={18} color="#a3a3a3" />
                                </Center>
                            </Box>
                            <Box w="10%" >
                                <Center>
                                    <FontAwesome name="camera" size={18} color="#a3a3a3" />
                                </Center>
                            </Box>
                        </HStack>
                    </VStack>
                    {/* send/audio button component */}
                    <VStack w="15%" alignItems="flex-end">
                        {text.length > 0 ?
                            <Button style={styles.Button} leftIcon={
                                <Ionicons name="send" size={20} color="black" />
                            } />
                            :
                            <Button style={styles.Button} leftIcon={
                                <MaterialIcons name="audiotrack" size={20} color="black" />
                            } />
                        }
                    </VStack>
                </HStack>
            </Actionsheet.Content>
        </Actionsheet >
    );
}


const styles = StyleSheet.create({
    Button: {
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    image: {
        height: 40,
        width: 40
    },
    textInputStyle: {
        color: '#a3a3a3',
    }

});