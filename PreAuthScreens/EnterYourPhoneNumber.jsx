import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  Button,
  Input,
  Icon,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAvoidingView, Pressable } from "react-native";

export default function EnterYourPhoneNumber({ navigation }) {
  return (
    <VStack flex={1} bg="#111827">
      <Box h="90%" p="1" mt="2">
        <VStack space={1}>
          <Center mb="5">
            <Text color="#fff" fontSize={18}>
              Enter your phone number
            </Text>
          </Center>
          <Text color="#fff" textAlign="center" fontSize={14}>
            WhatsApp will send an SMS message to verify your phone number.
            <Text color="blue.300">What's my number?</Text>
          </Text>
          <Center>
            <Box w="67%">
              <Input
                variant="underlined"
                color="#fff"
                fontSize={16}
                textAlign="center"
                placeholder="select country"
                InputRightElement={
                  <Pressable
                    onPress={() => navigation.navigate("Choose A Country")}
                  >
                    <Icon
                      as={<AntDesign name="caretdown" />}
                      size={5}
                      mr="2"
                      color="#047857"
                    />
                  </Pressable>
                }
              />
            </Box>
          </Center>
          <Center>
            <HStack w="65%" space={2}>
              <Box w="25%">
                <Input
                  variant="underlined"
                  keyboardType="number-pad"
                  maxLength={2}
                  color="#fff"
                  fontSize={16}
                  InputLeftElement={
                    <Icon
                      as={<AntDesign name="plus" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                />
              </Box>
              <Box w="75%">
                <Input
                  color="#fff"
                  fontSize={16}
                  variant="underlined"
                  placeholder="phone number"
                  maxLength={10}
                  keyboardType="number-pad"
                />
              </Box>
            </HStack>
          </Center>
        </VStack>
      </Box>
      <Box h="10%">
        <Center>
          <Button bg="#047857">NEXT</Button>
        </Center>
      </Box>
    </VStack>
  );
}
