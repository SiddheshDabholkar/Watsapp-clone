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

export default function ProfileModal({ show, setShow, toggle, data }) {
  console.log("data", data);
  const BottomBar = () => (
    <>
      <HStack p="1">
        <Center w="25%">
          <Icon as={<MaterialIcons />} name="chat" size={5} color="green.500" />
        </Center>
        <Center w="25%">
          <Icon as={Ionicons} name="md-call" size={5} color="green.500" />
        </Center>
        <Center w="25%">
          <Icon as={FontAwesome5} name="video" size={5} color="green.500" />
        </Center>
        <Center w="25%">
          <Icon as={Feather} name="info" size={5} color="green.500" />
        </Center>
      </HStack>
    </>
  );
  return (
    <Modal isOpen={show} onClose={() => setShow(false)} size="lg">
      <Box height="35%" width="60%" bg="#fff" mt="0" mb="auto" mt="20">
        <VStack>
          <Box h="85%">
            <Image height="100%" width="100%" source={{ uri: data.img }} />
          </Box>
          <Box h="15%" alignItems="center" justifyContent="center">
            <BottomBar />
          </Box>
        </VStack>
      </Box>
    </Modal>
  );
}
