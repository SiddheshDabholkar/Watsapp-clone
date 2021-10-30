import React, { memo, useState } from 'react';
import { Text, Box, HStack, Center, Switch } from 'native-base';


const ArchiveSettings = () => {
    return (
        <Box bg="#111827" flex={1} p={6}>
            <Center>
                <HStack space={1}>
                    <Center w="90%" alignItems="flex-start">
                        <Text bold color="#fff">Keep chats archieved</Text>
                        <Text color="#fff">Archieved chats will remain archieved when you receive a new message</Text>
                    </Center>
                    <Center w="10%" >
                        <Switch size="md"
                            defaultIsChecked={true}
                        />
                    </Center>
                </HStack>
            </Center>
        </Box >
    );
};

export default memo(ArchiveSettings);