import React from "react";
import { Box, Text, HStack } from "native-base";

export default function Message({ item }) {
  const me = item.userId === 1;
  return (
    <Box
      w="100%"
      alignItems={`flex-${me ? "end" : "start"}`}
      justifyContent={`flex-${me ? "end" : "start"}`}
      mt="3"
    >
      <HStack w="70%">
        <HStack
          w="100%"
          flex={1}
          justifyContent={`flex-${me ? "end" : "start"}`}
        >
          <Box
            style={{
              alignSelf: `flex-${me ? "end" : "start"}`,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              alignItems: "center",
              maxWidth: "75%",
            }}
            bg={!me ? "#262d31" : "#056162"}
          >
            <Text color="#fff" p="2">
              {item?.message}
            </Text>
          </Box>
          <Box
            alignItems="flex-end"
            justifyContent="flex-end"
            bg={!me ? "#262d31" : "#056162"}
            style={{
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              maxWidth: "25%",
            }}
          >
            <Text color="#fff" fontSize="10" ml="2" p="2">
              {item?.time}
            </Text>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}
