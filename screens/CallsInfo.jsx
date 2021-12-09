import React, { useLayoutEffect } from "react";
import { TouchableOpacity, Pressable } from "react-native";
import PopoverThreeButton from "../components/PopoverThreeButton";
import {
  Box,
  VStack,
  HStack,
  Center,
  Avatar,
  Text,
  Icon,
  Divider,
} from "native-base";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

const CallLogData = [
  { id: 1, name: "Remove from call log", navigateTo: "" },
  { id: 2, name: "Block", navigateTo: "" },
];

export default function CallsInfo({ navigation, route }) {
  const {
    callOrVideoCall,
    received,
    id,
    name,
    time,
    date,
    img,
    noOfCalls,
    IncomingOrOutgoing,
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <Pressable
            onPress={() =>
              navigation.navigate("Chat", {
                name,
                img,
                id,
                time,
              })
            }
          >
            <TouchableOpacity>
              <Box p={2}>
                <Icon
                  as={<MaterialIcons name="chat" size={24} color="black" />}
                  size="sm"
                />
              </Box>
            </TouchableOpacity>
          </Pressable>
          <PopoverThreeButton data={CallLogData} />
        </>
      ),
    });
  }, [navigation]);

  return (
    <Box flex={1} bg="#101820" p="4">
      <VStack>
        <Center>
          <HStack>
            <Box w="15%">
              <Avatar bg="blue.500" />
            </Box>
            <Box w="85%">
              <HStack>
                <Box w="70%">
                  <Text bold color="#fff">
                    {name}
                  </Text>
                  <Text color="#fff">hey there!</Text>
                </Box>
                <Center w="30%">
                  <HStack space={8}>
                    <Pressable>
                      <TouchableOpacity>
                        <Icon
                          as={Ionicons}
                          name="md-call"
                          size={4}
                          color="green.500"
                        />
                      </TouchableOpacity>
                    </Pressable>
                    <Pressable>
                      <TouchableOpacity>
                        <Icon
                          as={FontAwesome5}
                          name="video"
                          size={4}
                          color="green.500"
                        />
                      </TouchableOpacity>
                    </Pressable>
                  </HStack>
                </Center>
              </HStack>
              <Divider bg="#52525b" thickness="0.2" my={3} />
              <Text color="#fff">{(time, date)}</Text>
            </Box>
          </HStack>
        </Center>
        <Center mt={5}>
          <HStack space={2}>
            <Center w="15%">
              <Icon
                as={Feather}
                name="arrow-up-right"
                size={5}
                color="red.500"
              />
            </Center>
            <Center w="85%">
              <HStack>
                <Center w="60%" alignItems="flex-start">
                  <Text color="#fff" bold>
                    Outgoing
                  </Text>
                  <Text color="#fff">3:24 pm</Text>
                </Center>
                <Center w="40%">
                  <Text color="#fff">not answered</Text>
                </Center>
              </HStack>
            </Center>
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
}
