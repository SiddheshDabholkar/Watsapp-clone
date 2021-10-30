import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Box, VStack, HStack, Center, Icon, Text, Divider } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Foundation } from '@expo/vector-icons';
import ProfileAvatar from "../components/ProfileAvatar";

export default function Profile() {
  return (
    <Box flex={1} bg="#111827" p={6} >
      <Center>
        <VStack>
          <Center p={5}>
            <ProfileAvatar />
          </Center>
          {/* name */}
          <HStack p={2}>
            <Box w="15%" alignItems="flex-start">
              <Icon
                as={FontAwesome5}
                name="user-alt"
                size={4}
                color="gray.500"
              />
            </Box>
            <Box w="85%" alignItems="flex-start">
              <VStack>
                <HStack>
                  <Box w="90%">
                    <Text color="#fff">Name</Text>
                    <Text bold color="#fff">Siddhesh</Text>
                  </Box>
                  <Box w="10%">
                    <TouchableOpacity>
                      <Icon
                        as={MaterialCommunityIcons}
                        name="pencil"
                        size={5}
                        color="green.500"
                      />
                    </TouchableOpacity>
                  </Box>
                </HStack>
                <Box mt={2}>
                  <Text color="#fff">This is not your username or pin. This name will be visible to your watsapp contacts</Text>
                </Box>
              </VStack>
              <Divider bg="#52525b" thickness="0.5" my={3} />
            </Box>
          </HStack>
          {/* About */}
          <HStack p={2}>
            <Box w="15%" alignItems="flex-start">
              <Icon
                as={AntDesign}
                name="infocirlceo"
                size={5}
                color="gray.500"
              />
            </Box>
            <Box w="85%" alignItems="flex-start">
              <HStack>
                <Box w="90%">
                  <Text color="#fff">About</Text>
                  <Text bold color="#fff">Sleeping</Text>
                </Box>
                <Box w="10%">
                  <TouchableOpacity>
                    <Icon
                      as={MaterialCommunityIcons}
                      name="pencil"
                      size={5}
                      color="green.500"
                    />
                  </TouchableOpacity>
                </Box>
              </HStack>
              <Divider bg="#52525b" thickness="0.2" my={3} />
            </Box>
          </HStack>
          {/* Phone */}
          <HStack p={2}>
            <Box w="15%" alignItems="flex-start">
              <Icon
                as={Foundation}
                name="telephone"
                size={5}
                color="gray.500"
              />
            </Box>
            <Box w="85%" alignItems="flex-start">
              <Text color="#fff">Phone</Text>
              <Text bold color="#fff">+91 9876543221</Text>
            </Box>
          </HStack>
        </VStack>
      </Center>
    </Box >
  );
}
