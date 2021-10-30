import React, { useState, useEffect } from 'react';
import { Box, Text, Center, VStack, HStack, Radio, Button } from 'native-base';

export default function StatusPrivacy({ navigation }) {
    const [value, setValue] = useState("1");
    useEffect(() => {
        if (value === "2") {
            navigation.navigate("Hide status from...");
        } else if (value === "3") {
            navigation.navigate("Share status with...");
        }
    }, [value]);
    return (
        <Box flex={1} bg="#111827">
            <Center>
                <VStack>
                    <Box p="8">
                        <Box mb={4}>

                            <Text color="green.500" fontSize={13}>Who can see my status updates</Text>
                        </Box>
                        <Box p={4}>
                            <Radio.Group
                                defaultValue="1"
                                name="myRadioGroup"
                                accessibilityLabel="select status privacy"
                                onChange={(nextValue) => {
                                    setValue(nextValue);
                                }}
                            >
                                <Radio value="1" my={1} >
                                    <Text ml={5} color="#fff" fontSize={16}>
                                        My contacts
                                    </Text>
                                </Radio>
                                <Radio value="2" my={1}>
                                    <Text ml={5} color="#fff" fontSize={16}>
                                        My contacts except..
                                    </Text>
                                </Radio>
                                <Radio value="3" my={1} >
                                    <Text ml={5} color="#fff" fontSize={16}>
                                        Only share with..
                                    </Text>
                                </Radio>
                            </Radio.Group>
                        </Box>
                        <Box mt={5}>
                            <Text fontSize={14} color="#a1a1aa">Changes to your privacy settings won't affect status updates that you've sent already</Text>
                        </Box>
                    </Box>
                    <Center justifyContent="flex-end" flex={1} mb={8}>
                        <Box>
                            <Button size="md">DONE</Button>
                        </Box>
                    </Center>
                </VStack>
            </Center>
        </Box >
    );
}
