import React, { useLayoutEffect } from "react";
import {
  TouchableOpacity,
  Pressable,
  FlatList,
  ImageBackground,
} from "react-native";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { HStack, Avatar, Box, Text, VStack, Center } from "native-base";
import ReplyBox from "../components/ReplyBox";
import Message from "../components/Message";
import image from "../assets/watsapp.jpeg";

const Messages = [
  {
    userId: 1,
    id: 1,
    name: "one",
    message:
      "lmao lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "09.22 pm",
    date: "1/1/21",
  },
  {
    userId: 1,
    id: 2,
    name: "two",
    message: "rofl",
    time: "09.22 pm",
    date: "2/2/21",
  },
  {
    userId: 2,
    id: 3,
    name: "three",
    message: "rofl",
    time: "09.22 pm",
    date: "3/3/21",
  },
  {
    userId: 2,
    id: 4,
    name: "four",
    message: "lmao",
    time: "09.22 pm",
    date: "4/4/21",
  },
  {
    userId: 2,
    id: 5,
    name: "five",
    message: "rofl",
    time: "09.22 pm",
    date: "22/2/21",
  },
  {
    userId: 1,
    id: 6,
    name: "six",
    message: "rofl",
    time: "09.22 pm",
    date: "5/5/21",
  },
  {
    userId: 2,
    id: 7,
    name: "seven",
    message:
      "lol Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "09.22 pm",
    date: "6/6/21",
  },
  {
    userId: 1,
    id: 8,
    name: "eight",
    message: "lmao",
    time: "09.22 pm",
    date: "7/7/21",
  },
  {
    userId: 2,
    id: 9,
    name: "nine",
    message: "lol",
    time: "09.22 pm",
    date: "8/8/21",
  },
  {
    userId: 1,
    id: 10,
    name: "ten",
    message: "rofl",
    time: "09.22 pm",
    date: "9/9/21",
  },
  {
    userId: 1,
    id: 11,
    name: "eleven",
    message: "lmao",
    time: "09.22 pm",
    date: "10/1/21",
  },
];

export default function Chat({ navigation, route }) {
  const { id, name, img, time } = route.params;

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
        <Text bold color="#fff">
          {name}
        </Text>
        <Text color="#fff">{time}</Text>
      </VStack>
    </HStack>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: "#fff",
      headerTitle: (props) => <Logo {...props} />,
      headerRight: () => (
        <HStack space={6}>
          <TouchableOpacity>
            <FontAwesome5 name="video" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="md-call" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={18} color="#fff" />
          </TouchableOpacity>
        </HStack>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Box flex={1} bg="#000">
        <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
          <Box flex={1} p="3%">
            <FlatList
              data={Messages}
              renderItem={Message}
              inverted
              keyExtractor={(item) => item.id}
            />
          </Box>
          <ReplyBox isOpen={true} />
        </ImageBackground>
      </Box>
    </>
  );
}
