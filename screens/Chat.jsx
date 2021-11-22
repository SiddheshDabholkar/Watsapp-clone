import React, { useLayoutEffect, useRef } from "react";
import {
  TouchableOpacity,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Button,
} from "react-native";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  HStack,
  Avatar,
  Box,
  Text,
  VStack,
  Center,
  useDisclose,
} from "native-base";
import StatusReplyModal from "../components/StatusReplyModal";
import ReplyBox from "../components/ReplyBox";

const ChatsList = [
  { id: 1, name: "one", message: "lmao", time: "1/1/21", noOfMessages: 1 },
  { id: 2, name: "two", message: "rofl", time: "2/2/21", noOfMessages: 11 },
  { id: 3, name: "three", message: "rofl", time: "3/3/21", noOfMessages: 0 },
  { id: 4, name: "four", message: "lmao", time: "4/4/21", noOfMessages: 1 },
  { id: 5, name: "five", message: "rofl", time: "22/2/21", noOfMessages: 0 },
  { id: 6, name: "six", message: "rofl", time: "5/5/21", noOfMessages: 1 },
  { id: 7, name: "seven", message: "lol", time: "6/6/21", noOfMessages: 2 },
  { id: 8, name: "eight", message: "lmao", time: "7/7/21", noOfMessages: 1 },
  { id: 9, name: "nine", message: "lol", time: "8/8/21", noOfMessages: 5 },
  { id: 10, name: "ten", message: "rofl", time: "9/9/21", noOfMessages: 0 },
  { id: 11, name: "eleven", message: "lmao", time: "10/1/21", noOfMessages: 1 },
  {
    id: 12,
    name: "twelve",
    message: "rofl",
    time: "yesterday",
    noOfMessages: 0,
  },
  {
    id: 13,
    name: "thirteen",
    message: "lol",
    time: "12:03 AM",
    noOfMessages: 0,
  },
  {
    id: 14,
    name: "fourteen",
    message: "lol",
    time: "yesterday",
    noOfMessages: 0,
  },
  {
    id: 15,
    name: "fifteen",
    message: "rofl",
    time: "10/25/21",
    noOfMessages: 0,
  },
  {
    id: 16,
    name: "sixteen",
    message: "lmao",
    time: "11/11/21",
    noOfMessages: 1,
  },
  {
    id: 17,
    name: "seventeen",
    message: "rofl",
    time: "10/05/2001",
    noOfMessages: 11,
  },
  {
    id: 18,
    name: "eighteen",
    message: "lmao",
    time: "yesterday",
    noOfMessages: 1,
  },
];

const renderItem = ({ item }) => {
  return (
    <>
      <Pressable>
        <HStack space="1" mt="6">
          <Center w="20%">
            <Box>
              <Avatar bg="blue.500" />
            </Box>
          </Center>
          <Center w="60%" alignItems="flex-start">
            <Box>
              <Text bold color="#fff">
                {item.name}
              </Text>
              <Text color="#fff">{item.message}</Text>
            </Box>
          </Center>
          <Center w="20%">
            <Text color="#fff">{item.time}</Text>
            <Text color="green.500">{item.noOfMessages}</Text>
          </Center>
        </HStack>
      </Pressable>
    </>
  );
};

export default function Chat({ navigation, route }) {
  const { id, name, img, time } = route.params;
  const ref = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclose();

  const Logo = () => (
    <HStack space={1}>
      <Avatar
        alignSelf="center"
        size="md"
        source={{
          uri: img,
        }}
      />
      <VStack>
        <Text bold>{name}</Text>
        <Text>{time}</Text>
      </VStack>
    </HStack>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <Logo {...props} />,
      headerRight: () => (
        <HStack space={6}>
          <TouchableOpacity>
            <FontAwesome5 name="video" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="md-call" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={18} color="black" />
          </TouchableOpacity>
        </HStack>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Box flex={1} bg="#000">
        <FlatList
          data={ChatsList}
          renderItem={renderItem}
          inverted
          keyExtractor={(item) => item.id}
        />
        <ReplyBox isOpen={true} />
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
