import React, { useState, useRef, useEffect, memo, forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import {
  Text,
  VStack,
  HStack,
  Button,
  Actionsheet,
  Box,
  Icon,
  Image,
  Center,
} from "native-base";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReplyBox = ({ isOpen, onOpen, onClose, img, disableOverlay }) => {
  const inputRef = useRef(null);
  const [text, onChangeText] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const { navigate } = useNavigation();
  const result = inputRef?.current?.isFocused();

  const handleEmojiButton = () => {
    setOpenEmoji(true);
    inputRef?.current?.blur();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ width: "100%" }}
    >
      <VStack>
        <HStack p="2">
          {/* reply modal */}
          <VStack w="85%" bg="#101820" p="2" borderRadius="10">
            {img && (
              <HStack bg="red.500" borderRadius="6">
                <VStack w="85%">
                  <HStack>
                    <Text color="#fff">bruh</Text>
                    <Text bold color="#fff">
                      {"\u2022"}
                    </Text>
                    <Text color="#fff">Symbol</Text>
                  </HStack>
                  <HStack>
                    <Ionicons name="image" size={20} color="black" />
                    <Text>Image</Text>
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
            )}
            <HStack height="8" p="1">
              <Box w="10%">
                <Center>
                  <FontAwesome5
                    name="smile"
                    size={20}
                    color="#a3a3a3"
                    onPress={handleEmojiButton}
                  />
                </Center>
              </Box>
              <Box w="70%">
                <TextInput
                  onChangeText={onChangeText}
                  value={text}
                  style={styles.textInputStyle}
                  ref={inputRef}
                  // onFocus={() => setOpenEmoji(false)}
                />
              </Box>
              <Center w="10%">
                <Entypo name="attachment" size={18} color="#a3a3a3" />
              </Center>
              <Center w="10%">
                <Pressable onPress={() => navigate("Camera")}>
                  <FontAwesome name="camera" size={18} color="#a3a3a3" />
                </Pressable>
              </Center>
            </HStack>
          </VStack>
          {/* send/audio button component */}
          <VStack w="15%" alignItems="flex-end">
            {text.length > 0 ? (
              <Button
                style={styles.Button}
                leftIcon={<Ionicons name="send" size={20} color="black" />}
              />
            ) : (
              <Button
                style={styles.Button}
                leftIcon={
                  <MaterialIcons name="audiotrack" size={20} color="black" />
                }
              />
            )}
          </VStack>
        </HStack>
        {!result && openEmoji && (
          <HStack mt="0" h="300" bg="#fff">
            <Text>bruh</Text>
          </HStack>
        )}
      </VStack>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Button: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  image: {
    height: 40,
    width: 40,
  },
  textInputStyle: {
    color: "#a3a3a3",
  },
});

export default memo(ReplyBox);
