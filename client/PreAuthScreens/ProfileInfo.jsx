import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  Avatar,
  Input,
  Icon,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileInfo() {
  return (
    <VStack flex={1} bg="#111827">
      <Center w="100%" h="6%">
        <Text textAlign="center" color="#fff" fontSize={18} bold>
          Profile info
        </Text>
      </Center>
      <Center m="3">
        <Text color="gray.200" textAlign="center" fontSize={14}>
          Please provide your name and an optional profile photo
        </Text>
      </Center>
      <Center m="5">
        <Avatar
          size="xl"
          source={{
            uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
          }}
        >
          SS
        </Avatar>
      </Center>
      <HStack space={2} w="100%" alignItems="center" justifyContent="center">
        <Input variant="underlined" placeholder="Type your name here" w="70%" />
        <Center>
          <Icon
            as={<AntDesign />}
            name="smile-circle"
            size={5}
            color="gray.500"
          />
        </Center>
      </HStack>
      <Box alignItems="center" justifyContent="flex-end" flex={1} mb="6">
        <Button bg="#047857">NEXT</Button>
      </Box>
    </VStack>
  );
}
