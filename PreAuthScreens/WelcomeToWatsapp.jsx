import React from "react";
import { Box, Text, VStack, Center, Button, HStack, Image } from "native-base";
import FromFacebook from "../components/FromFacebook";

export default function WelcomeToWatsapp() {
  return (
    // <Box flex={1} bg="#101820">
    <Box flex={1} bg="#000">
      <VStack>
        <Box h="92%">
          <VStack space={2}>
            <Box h="16%" justifyContent="flex-end">
              <Center>
                <Text color="#fff" bold fontSize={38}>
                  Welcome to WhatsApp
                </Text>
              </Center>
            </Box>
            <HStack h="50%" justifyContent="center">
              <Center>
                <Image
                  style={{
                    borderRadius: 125,
                  }}
                  source={require("../assets/watsapp.jpeg")}
                  alt="Alternate Text"
                  size="250"
                />
              </Center>
            </HStack>
            <HStack h="34%">
              <Center>
                <VStack p="6">
                  <Text style={{ textAlign: "center" }} color="gray.400">
                    Read our
                    <Text color="blue.300">Privacy Policy</Text>
                    .Tap "Agree and continue" to accept the
                    <Text color="blue.300"> Terms of Service</Text>
                  </Text>
                  <Center>
                    <Button w="3/4" bg="#047857" mt="4">
                      AGREE AND CONTINUE
                    </Button>
                  </Center>
                </VStack>
              </Center>
            </HStack>
          </VStack>
        </Box>
        <Box h="8%">
          <FromFacebook />
        </Box>
      </VStack>
    </Box>
  );
}
