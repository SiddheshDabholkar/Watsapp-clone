import React, {
  useContext,
  useEffect,
  memo,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useWindowDimensions, FlatList } from "react-native";
import {
  Fab,
  Icon,
  VStack,
  Center,
  HStack,
  Box,
  Avatar,
  Text,
  Pressable,
} from "native-base";
import {
  useIsFocused,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { PopupContext } from "../context/PopupContext";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import useModal from "../hooks/useModal";
import ProfileModal from "../components/ProfileModal";

const ChatsList = [
  {
    img: "https://reactnative.dev/img/tiny_logo.png",
    id: 1,
    name: "one",
    message: "lmao",
    time: "1/1/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 2,
    name: "two",
    message: "rofl",
    time: "2/2/21",
    noOfMessages: 11,
  },
  {
    img: "",
    id: 3,
    name: "three",
    message: "rofl",
    time: "3/3/21",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 4,
    name: "four",
    message: "lmao",
    time: "4/4/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 5,
    name: "five",
    message: "rofl",
    time: "22/2/21",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 6,
    name: "six",
    message: "rofl",
    time: "5/5/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 7,
    name: "seven",
    message: "lol",
    time: "6/6/21",
    noOfMessages: 2,
  },
  {
    img: "",
    id: 8,
    name: "eight",
    message: "lmao",
    time: "7/7/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 9,
    name: "nine",
    message: "lol",
    time: "8/8/21",
    noOfMessages: 5,
  },
  {
    img: "",
    id: 10,
    name: "ten",
    message: "rofl",
    time: "9/9/21",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 11,
    name: "eleven",
    message: "lmao",
    time: "10/1/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 12,
    name: "twelve",
    message: "rofl",
    time: "yesterday",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 13,
    name: "thirteen",
    message: "lol",
    time: "12:03 AM",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 14,
    name: "fourteen",
    message: "lol",
    time: "yesterday",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 15,
    name: "fifteen",
    message: "rofl",
    time: "10/25/21",
    noOfMessages: 0,
  },
  {
    img: "",
    id: 16,
    name: "sixteen",
    message: "lmao",
    time: "11/11/21",
    noOfMessages: 1,
  },
  {
    img: "",
    id: 17,
    name: "seventeen",
    message: "rofl",
    time: "10/05/2001",
    noOfMessages: 11,
  },
  {
    img: "",
    id: 18,
    name: "eighteen",
    message: "lmao",
    time: "yesterday",
    noOfMessages: 1,
  },
];

function Chats({ route }) {
  const [data, setData] = useState(null);
  const flat = useRef(null);
  const isFocused = useIsFocused();
  const { height, width } = useWindowDimensions();
  const { navigate } = useNavigation();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);
  const { Modal, show, setShow, toggle } = useModal(ProfileModal);

  useLayoutEffect(() => {
    isFocused && setCurrentTabName({ type: "CHATS", payload: "CHATS" });
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return (
      <>
        <Pressable
          onPress={() =>
            navigate("Chat", {
              name: item.name,
              img: item.img,
              id: item.id,
              time: item.time,
            })
          }
        >
          <HStack space="1" mt="6">
            <Center w="20%">
              <Pressable
                onPress={() => {
                  setShow(true);
                  setData(item);
                }}
              >
                <Box>
                  <Avatar bg="blue.500" />
                </Box>
              </Pressable>
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

  const Archieved = () => {
    return (
      <>
        <Pressable onPress={() => navigate("Archieved", { name: "chats" })}>
          <HStack mt="5">
            <Center w="20%">
              <Box>
                <Feather name="archive" size={20} color="#fff" />
              </Box>
            </Center>
            <Center w="60%" alignItems="flex-start">
              <Box>
                <Text bold color="#fff">
                  Archieved
                </Text>
              </Box>
            </Center>
            <Center w="20%">
              <Box>
                <Text color="green.500">1</Text>
              </Box>
            </Center>
          </HStack>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <Box height={height} bg="#111827">
        <VStack>
          <Center>
            <FlatList
              data={ChatsList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={Archieved}
            />
          </Center>
        </VStack>
        {show && (
          <Modal show={show} setShow={setShow} toggle={toggle} data={data} />
        )}
      </Box>
      {isFocused && (
        <Fab
          onPress={() => navigate("SelectContact", { name: "chats" })}
          position="absolute"
          size="75"
          icon={
            <Icon
              color="white"
              as={<MaterialIcons name="chat" size={24} color="black" />}
              size="sm"
            />
          }
        />
      )}
    </>
  );
}

export default memo(Chats);
