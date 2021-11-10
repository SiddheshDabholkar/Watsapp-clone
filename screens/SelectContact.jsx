import React from "react";
import useContacts from "../hooks/useContacts";
import { View, FlatList, Pressable } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Text, VStack, HStack, Avatar, Center } from 'native-base';

const HeaderData = [
  { id: 1, icon: <MaterialIcons name="people" size={24} color="black" />, name: "New group", navigateTo: "" },
  { id: 2, icon: <MaterialCommunityIcons name="account-plus" size={24} color="black" />, name: "New contact", navigateTo: "" },
];

const FooterData = [
  { id: 1, icon: <MaterialCommunityIcons name="share-variant" size={30} color="gray" />, name: "Invite friends", navigateTo: "Invite a friend" },
  { id: 2, icon: <MaterialCommunityIcons name="help-circle" size={30} color="gray" />, name: "Contacts help", navigateTo: "Contacts help" },
];

export default function SelectContact() {
  const contacts = useContacts();

  const renderItem = ({ item }) => (
    <Box p={4}>
      <Pressable>
        <HStack space={3}>
          <Avatar
            size="md"
            bg="green.500" />
          <Center>
            <Text color="#fff">{item.name}</Text>
          </Center>
        </HStack>
      </Pressable>
    </Box>
  );

  const Header = () => (
    <VStack space={3} p={4}>
      {
        HeaderData.map(h => (
          <Box key={h.id}>
            <Pressable>
              <HStack space={3}>
                <Avatar
                  size="md"
                  bg="green.500"
                >
                  <Center>
                    {h.icon}
                  </Center>
                </Avatar>
                <Center>
                  <Text color="#fff">{h.name}</Text>
                </Center>
              </HStack>
            </Pressable>
          </Box>
        ))
      }
    </VStack>
  );

  const Footer = () => (
    <VStack space={3} p={4}>
      {
        FooterData.map(h => (
          <Box p={1} key={h.id}>
            <Pressable>
              <HStack space={3}>
                <Center>
                  {h.icon}
                </Center>
                <Center>
                  <Text color="#fff">{h.name}</Text>
                </Center>
              </HStack>
            </Pressable>
          </Box>
        ))
      }
    </VStack>
  );

  return (
    <Box flex={1} bg="#111827">

      <View>
        <FlatList
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          data={Object.values(contacts)}
          renderItem={renderItem}
          id={(item) => item.id}
        />
      </View>
    </Box>
  );
}
