import React from "react";
import { Box, HStack, VStack, Text } from "native-base";

export default function Message({ item }) {
  const me = item.userId === 1;
  return (
    <Box
      w="100%"
      alignItems={`flex-${me ? "end" : "start"}`}
      justifyContent={`flex-${me ? "end" : "start"}`}
      mt="2"
    >
      <Box w="70%" bg={!me ? "#262d31" : "#056162"} borderRadius="5">
        {/* <Box style={{ alignSelf: "flex-start" }}> */}
        <Text color="#fff" p="2">
          {item?.message}
        </Text>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
