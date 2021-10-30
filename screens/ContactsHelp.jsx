import React from 'react';
import { Box, VStack, Center, Text, HStack } from 'native-base';

export default function ContactsHelp() {
    return (
        <Box p={1} flex={1} bg="#111827">
            <Center p={3}>
                <VStack >
                    <Text color="#fff">
                        If some of your friends don't appear in the contacts list, we recommend the following steps
                    </Text>
                    <HStack>
                        <Box w="5%" >
                            <Text bold color="#fff">{'\u2022'}</Text>
                        </Box>
                        <Box w="95%">
                            <Text color="#fff">Make sure that your freind's phone number is in your address book</Text>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box w="5%" >
                            <Text bold color="#fff">{'\u2022'}</Text>
                        </Box>
                        <Box w="95%">
                            <Text color="#fff">Make sure that your freind is using WhatsApp Messenger</Text>
                        </Box>
                    </HStack>
                </VStack>
            </Center>
        </Box >
    );
}

