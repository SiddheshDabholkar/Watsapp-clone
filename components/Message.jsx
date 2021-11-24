import React from "react";
import { Box, HStack, VStack, Text } from "native-base";

export default function Message({ item }) {
  const me = item.userId === 1;
  return (
    <Box
      w="100%"
      alignItems={`flex-${me ? "start" : "end"}`}
      justifyContent={`flex-${me ? "start" : "end"}`}
      mt="2"
    >
      <Box w="70%" bg="blue.500" borderRadius="5">
        <Text color="#fff" p="2">
          {item?.message}
        </Text>
      </Box>
    </Box>
  );
}
