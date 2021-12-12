import React, { memo, useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  Input,
  Divider,
  Icon,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const number = "+91 1234567890";

const VerifyPhoneNumber = memo(() => {
  return (
    <VStack flex={1} bg="#111827">
      <Center w="100%" h="6%">
        <Text color="#fff" fontSize={18} bold>
          Verify {number}
        </Text>
      </Center>
      <Center w="100%" h="7%">
        <Box w="90%">
          <Text textAlign="center" color="#fff" fontSize={13}>
            Waiting to automatically detect an SMS sent to {number}.
            <Text color="blue.400">Wrong number?</Text>
          </Text>
        </Box>
      </Center>
      <Center>
        <VStack space={3}>
          <Input
            color="#fff"
            fontSize={16}
            variant="underlined"
            placeholder="phone number"
            maxLength={10}
            keyboardType="number-pad"
          />
          <Text color="gray.400" fontSize={14}>
            Enter 6 digit code
          </Text>
        </VStack>
      </Center>
      <Center mt="3" p="2" m="3">
        <HStack h="10">
          <Box w="15%" alignItems="center" justifyContent="center">
            <Icon
              as={<MaterialCommunityIcons />}
              name="message-processing"
              size={6}
              color="gray.500"
            />
          </Box>
          <Box w="70%" alignItems="flex-start" justifyContent="center">
            <Text color="gray.500">Resend sms</Text>
          </Box>
          <Box w="15%" alignItems="center" justifyContent="center">
            <Text color="gray.500">1:00</Text>
          </Box>
        </HStack>
        <Divider my="1" color="gray.100" />
        <HStack h="10">
          <Box w="15%" alignItems="center" justifyContent="center">
            <Icon
              as={<MaterialIcons />}
              name="call"
              size={6}
              color="gray.500"
            />
          </Box>
          <Box w="70%" alignItems="flex-start" justifyContent="center">
            <Text color="gray.500">Call me</Text>
          </Box>
          <Box w="15%" alignItems="center" justifyContent="center">
            <Text color="gray.500">1:00</Text>
          </Box>
        </HStack>
      </Center>
    </VStack>
  );
});

export default VerifyPhoneNumber;
