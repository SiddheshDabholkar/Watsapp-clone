import React from 'react';
import { View, Text } from 'react-native';
import { HStack, Box, Center, TextInput } from 'native-base';
import { Entypo, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function ReplyBox() {
    return (
        <HStack height="8" p="1">
            <Box w="10%">
                <Center>
                    <FontAwesome5 name="smile" size={20} color="#a3a3a3" onPress={handleEmojiButton} />
                </Center>
            </Box>
            <Box w="70%">
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    style={styles.textInputStyle}
                    ref={inputRef}
                    onFocus={() => setOpenEmoji(false)}
                />
            </Box>
            <Box w="10%" >
                <Center>
                    <Entypo name="attachment" size={18} color="#a3a3a3" />
                </Center>
            </Box>
            <Box w="10%" >
                <Pressable onPress={() => navigate("Camera")}>
                    <Center>
                        <FontAwesome name="camera" size={18} color="#a3a3a3" />
                    </Center>
                </Pressable>
            </Box>
        </HStack>
    );
}
