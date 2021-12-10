import React, { memo } from "react";
import { HStack, VStack, Text, Center } from "native-base";
import { useFonts } from "expo-font";

function FromFacebook() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  return (
    <HStack w="100%" justifyContent="center">
      <VStack>
        <Center>
          <Text color="gray.500" p="2">
            from
          </Text>
          <Text style={{ fontFamily: "Space Mono", fontSize: 15 }} color="#fff">
            FACEBOOK
          </Text>
        </Center>
      </VStack>
    </HStack>
  );
}

export default memo(FromFacebook);
