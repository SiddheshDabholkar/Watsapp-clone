import React, { useContext, useEffect, memo, useLayoutEffect } from "react";
import { SectionList } from "react-native";
import { Fab, Icon, Box, Text, Button, VStack, ScrollView, Pressable, HStack, Avatar, Center, Circle, FlatList } from 'native-base';
import { useIsFocused, useNavigation, useFocusEffect } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";
import { Ionicons } from '@expo/vector-icons';

const StatusUpdate = [
  {
    title: "Recent updates",
    data: [
      { noOfStatuses: 1, id: 1, name: "one", time: "11/1/21" },
      { noOfStatuses: 4, id: 2, name: "two", time: "10/2/21" },
      { noOfStatuses: 2, id: 3, name: "three", time: "9/3/21" },
      { noOfStatuses: 7, id: 4, name: "four", time: "5/5/21" },
      { noOfStatuses: 9, id: 5, name: "five", time: "2/2/21" },
      { noOfStatuses: 1, id: 6, name: "six", time: "8/8/20" },
      { noOfStatuses: 2, id: 7, name: "seven", time: "4/3/21" }
    ]
  },
  {
    title: "Viewed updates",
    data: [
      { noOfStatuses: 4, id: 1, name: "one", time: "11/1/21" },
      { noOfStatuses: 4, id: 2, name: "two", time: "10/2/21" },
      { noOfStatuses: 6, id: 3, name: "three", time: "9/3/21" },
      { noOfStatuses: 3, id: 4, name: "four", time: "5/5/21" },
      { noOfStatuses: 2, id: 5, name: "five", time: "2/2/21" },
      { noOfStatuses: 1, id: 6, name: "six", time: "8/8/20" },
      { noOfStatuses: 8, id: 7, name: "seven", time: "4/3/21" },
    ]
  }
];

function Status({ route }) {
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);

  useLayoutEffect(() => {
    isFocused && setCurrentTabName({ type: "STATUS", payload: "STATUS" });
  }, [isFocused]);

  const UploadStatus = () => {
    return (
      <>
        <Pressable onPress={() => navigate("Camera")}>
          <Center p="4">
            <HStack >
              <Box w="15%">
                <Avatar
                  bg="lightBlue.400"

                >
                  <Avatar.Badge bg="green.500" />
                </Avatar>
              </Box>
              <Box w="85%" alignItems="flex-start">
                <Text color="#fff" bold>My status</Text>
                <Text color="#fff">Tap to add status update</Text>
              </Box>
            </HStack>
          </Center>
        </Pressable>
      </>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable mt="2" p="2" onPress={() => navigate("SeeStatus", {
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        name: item.name
      })}>
        <HStack space={3}>
          <Center w="15%">
            <Avatar
              size="55"
              bg="lightBlue.400"
            />
          </Center>
          <Center w="85%" alignItems="flex-start">
            {/* <Box > */}
            <Text color="#fff" bold>{item.name}</Text>
            <Text color="#fff">{item.time}</Text>
            {/* </Box> */}
          </Center>
        </HStack>
      </Pressable>
    );
  };

  return (
    <>
      <Box bg="#111827" flex={1}>
        <VStack >
          <SectionList
            ListHeaderComponent={<UploadStatus />}
            sections={StatusUpdate}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => (
              <Text color="#fff">{title}</Text>
            )}
          />
        </VStack>
      </Box>
      {isFocused &&
        < Fab
          onPress={() => navigate("Camera")}
          position="absolute"
          size="75"
          icon={<Icon color="white" as={<Ionicons name="ios-camera" size={24} color="black" />} size="sm" />}
        />
      }
    </>
  );
}

export default memo(Status);