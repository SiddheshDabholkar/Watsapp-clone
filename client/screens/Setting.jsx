import React from "react";
import { View, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Divider,
  VStack,
  Avatar,
  Pressable,
} from "native-base";

const List = [
  {
    id: "1",
    subText: "Privacy,security,change number",
    name: "Account",
    iconName: Ionicons,
    Iname: "key-sharp",
    size: "sm",
    color: "white",
  },
  {
    id: "2",
    subText: "Theme, wallpapers, chat history",
    name: "Chats",
    iconName: MaterialIcons,
    Iname: "chat",
    size: "sm",
    color: "white",
  },
  {
    id: "3",
    subText: "Message,group & call tones",
    name: "Notification",
    iconName: Octicons,
    Iname: "bell",
    size: "sm",
    color: "white",
  },
  {
    id: "4",
    subText: "Network usage,auto-download",
    name: "Storage and data",
    iconName: MaterialIcons,
    Iname: "data-usage",
    size: "sm",
    color: "white",
  },
  {
    id: "5",
    subText: "Help center,contact us,privacy policy",
    name: "Help",
    iconName: MaterialIcons,
    Iname: "data-usage",
    size: "sm",
    color: "white",
  },
];

export default function Setting({ navigation }) {
  const { width, height } = useWindowDimensions();
  const renderItem = ({ item }) => {
    return (
      <>
        <HStack space={10} mt="7">
          <Box ml="6">
            <Icon
              as={item.iconName}
              name={item.Iname}
              size={item.size}
              color={item.color}
            />
          </Box>
          <Box>
            <Text color="#fff" fontSize="md" bold>
              {item.name}
            </Text>
            <Text color="#fff" fontSize="sm">
              {item.subText}
            </Text>
          </Box>
        </HStack>
      </>
    );
  };

  return (
    <Box bg="#101820" height={height}>
      <VStack>
        <HStack mt="4">
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <HStack space={5}>
              <Box ml="4">
                <Avatar
                  size="lg"
                  bg="amber.500"
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                  }}
                />
              </Box>
              <Center width="65%" alignItems="flex-start">
                <Box>
                  <Text color="#fff" fontSize="md" bold>
                    bruh
                  </Text>
                  <Text color="#fff" fontSize="sm">
                    hmm
                  </Text>
                </Box>
              </Center>
            </HStack>
          </Pressable>
          <Center>
            <Box>
              <Pressable>
                <Ionicons name="qr-code" size={24} color="#fff" />
              </Pressable>
            </Box>
          </Center>
        </HStack>
        <Divider thickness={1} bg="#404040" mt="5" />
        <FlatList
          data={List}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Divider thickness={1} bg="#404040" mt="10" />
        <HStack space={10} mt="7">
          <Box ml="6">
            <Icon as={MaterialIcons} name="people" size="sm" color="white" />
          </Box>
          <Box>
            <Text color="#fff" fontSize="md" bold>
              Invite a friend
            </Text>
          </Box>
        </HStack>
        <Box mt={16}>
          <VStack>
            <Center>
              <Center>
                <Text color="#fff" fontSize="sm">
                  from
                </Text>
              </Center>
              <Text color="#fff" fontSize="md" bold>
                FACEBOOK
              </Text>
            </Center>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
