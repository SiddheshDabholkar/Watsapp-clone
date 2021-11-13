import React, { useContext, useEffect, memo, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { Fab, Icon, VStack, Center, HStack, Box, Avatar, Text, Pressable } from 'native-base';
import { useIsFocused, useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";
import { MaterialIcons, Ionicons, FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';

const CallLog = [
  { callOrVideoCall: 1, received: 1, id: 1, name: "one", time: "11.pm", date: "1/1/21", noOfCalls: 1, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 0, id: 2, name: "two", time: "11.pm", date: "2/2/21", noOfCalls: 11, IncomingOrOutgoing: 0 },
  { callOrVideoCall: 1, received: 1, id: 3, name: "three", time: "11.pm", date: "3/3/21", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 1, id: 4, name: "four", time: "11.pm", date: "4/4/21", noOfCalls: 1, IncomingOrOutgoing: 0 },
  { callOrVideoCall: 1, received: 0, id: 5, name: "five", time: "11.pm", date: "22/2/21", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 1, received: 1, id: 6, name: "six", time: "11.pm", date: "5/5/21", noOfCalls: 1, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 0, id: 7, name: "seven", time: "11.pm", date: "6/6/21", noOfCalls: 2, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 1, received: 1, id: 8, name: "eight", time: "11.pm", date: "7/7/21", noOfCalls: 1, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 1, received: 1, id: 9, name: "nine", time: "11.pm", date: "8/8/21", noOfCalls: 5, IncomingOrOutgoing: 0 },
  { callOrVideoCall: 1, received: 0, id: 10, name: "ten", time: "11.pm", date: "9/9/21", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 0, id: 11, name: "eleven", time: "11.pm", date: "10/1/21", noOfCalls: 1, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 1, received: 1, id: 12, name: "twelve", time: "11.pm", date: "yesterday", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 0, id: 13, name: "thirteen", time: "11.pm", date: "12:03 AM", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 1, received: 1, id: 14, name: "fourteen", time: "11.pm", date: "yesterday", noOfCalls: 0, IncomingOrOutgoing: 0 },
  { callOrVideoCall: 0, received: 1, id: 15, name: "fifteen", time: "11.pm", date: "10/25/21", noOfCalls: 0, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 1, id: 16, name: "sixteen", time: "11.pm", date: "11/11/21", noOfCalls: 1, IncomingOrOutgoing: 1 },
  { callOrVideoCall: 0, received: 0, id: 17, name: "seventeen", time: "11.pm", date: "10/05/2001", noOfCalls: 11, IncomingOrOutgoing: 0 },
  { callOrVideoCall: 1, received: 1, id: 18, name: "eighteen", time: "11.pm", date: "yesterday", noOfCalls: 1, IncomingOrOutgoing: 1 },
];

const CallsData = [{ id: "1", navigateTo: "", name: "Clear call log" }, { id: "2", navigateTo: "Setting", name: "Setting" }];

function Calls({ route }) {
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);

  useLayoutEffect(() => {
    isFocused && setCurrentTabName({ type: "CALLS", payload: "CALLS" });
  }, [isFocused]);

  const renderItem = ({ item }) => {
    const { callOrVideoCall, received, id, name, time, date, noOfCalls, IncomingOrOutgoing } = item;
    return (
      <>
        <Pressable onPress={() => navigate("Calls Info", {
          callOrVideoCall, received, id, name, time, date, noOfCalls, IncomingOrOutgoing
        })}>
          <HStack mt="5">
            <Center w="20%">
              <Box>
                <Avatar
                  bg="blue.500"
                />
              </Box>
            </Center>
            <Center w="50%" alignItems="flex-start">
              <Box>
                <Text bold color="#fff">{name}</Text>
                <Text color="#fff">{IncomingOrOutgoing ? <Icon as={Feather} name="arrow-down-left" size={5} color={received ? "green.500" : "red.500"} /> : <Icon as={Feather} name="arrow-up-right" size={5} color={received ? "green.500" : "red.500"} />}{" "}{noOfCalls > 1 && `(${noOfCalls})`}{" "}{time, date}</Text>
              </Box>
            </Center>
            <Feather name="" size={24} color="black" />
            <Center w="30%" mr="8">
              <Box>
                {callOrVideoCall ? <Icon as={Ionicons} name="md-call" size={4} color="green.500" /> : <Icon as={FontAwesome5} name="video" size={4} color="green.500" />}
              </Box>
            </Center>
          </HStack>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <Box flex={1} bg="#111827">
        <VStack>
          <Center>
            <FlatList
              data={CallLog}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </Center>
        </VStack>
      </Box>
      {isFocused &&
        <Fab
          onPress={() => navigate("SelectContact", { name: "calls" })}
          position="absolute"
          size="75"
          icon={<Icon color="white" as={<MaterialIcons name="add-call" size={24} color="black" />} size="sm" />}
        />
      }
    </>
  );
}

export default memo(Calls);