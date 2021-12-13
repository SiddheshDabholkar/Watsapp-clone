import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Modal,
  Icon,
  Center,
} from "native-base";

import {
  Ionicons,
  FontAwesome5,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import { Pressable } from "react-native";

export default function ProfileModal({ show, setShow, toggle, data }) {
  const BottomBar = () => (
    <>
      <HStack p="1">
        <Center w="25%">
          <Pressable
            onPress={() =>
              navigate("Chat", {
                name: data.name,
                img: data.img,
                id: data.id,
                time: data.time,
              })
            }
          >
            <Icon
              as={<MaterialIcons />}
              name="chat"
              size={5}
              color="green.500"
            />
          </Pressable>
        </Center>
        <Center w="25%">
          <Icon as={Ionicons} name="md-call" size={5} color="green.500" />
        </Center>
        <Center w="25%">
          <Icon as={FontAwesome5} name="video" size={5} color="green.500" />
        </Center>
        <Center w="25%">
          <Pressable
            onPress={() =>
              navigate("ViewContact", {
                name: data.name,
                img: data.img,
                id: data.id,
                time: data.time,
              })
            }
          >
            <Icon as={Feather} name="info" size={5} color="green.500" />
          </Pressable>
        </Center>
      </HStack>
    </>
  );
  const { navigate } = useNavigation();
  return (
    <Modal isOpen={show} onClose={() => setShow(false)} size="lg">
      <Box height="35%" width="60%" bg="#fff" mt="0" mb="auto" mt="20">
        <VStack>
          <Box h="85%">
            <Image
              height="100%"
              width="100%"
              source={{ uri: data.img }}
              alt=""
            />
          </Box>
          <Box h="15%" alignItems="center" justifyContent="center">
            <BottomBar />
          </Box>
        </VStack>
      </Box>
    </Modal>
  );
}
