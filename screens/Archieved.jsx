import React, { memo, useLayoutEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { Fab, Icon, VStack, Center, HStack, Box, Avatar, Text, Pressable } from 'native-base';
import PopoverThreeButton from '../components/PopoverThreeButton';

const ArchieveMoreList = [
    { id: 1, name: "Archive Setting", navigateTo: "" }
];

const ChatsList = [
    { id: 1, name: "one", message: "lmao", time: "1/1/21", noOfMessages: 1 },
    { id: 2, name: "two", message: "rofl", time: "2/2/21", noOfMessages: 11 },
    { id: 3, name: "three", message: "rofl", time: "3/3/21", noOfMessages: 0 },
    { id: 4, name: "four", message: "lmao", time: "4/4/21", noOfMessages: 1 },
    { id: 5, name: "five", message: "rofl", time: "22/2/21", noOfMessages: 0 },
    { id: 6, name: "six", message: "rofl", time: "5/5/21", noOfMessages: 1 },
    { id: 7, name: "seven", message: "lol", time: "6/6/21", noOfMessages: 2 },
    { id: 8, name: "eight", message: "lmao", time: "7/7/21", noOfMessages: 1 },
    { id: 9, name: "nine", message: "lol", time: "8/8/21", noOfMessages: 5 },
    { id: 10, name: "ten", message: "rofl", time: "9/9/21", noOfMessages: 0 },
    { id: 11, name: "eleven", message: "lmao", time: "10/1/21", noOfMessages: 1 },
    { id: 12, name: "twelve", message: "rofl", time: "yesterday", noOfMessages: 0 },
    { id: 13, name: "thirteen", message: "lol", time: "12:03 AM", noOfMessages: 0 },
    { id: 14, name: "fourteen", message: "lol", time: "yesterday", noOfMessages: 0 },
    { id: 15, name: "fifteen", message: "rofl", time: "10/25/21", noOfMessages: 0 },
    { id: 16, name: "sixteen", message: "lmao", time: "11/11/21", noOfMessages: 1 },
    { id: 17, name: "seventeen", message: "rofl", time: "10/05/2001", noOfMessages: 11 },
    { id: 18, name: "eighteen", message: "lmao", time: "yesterday", noOfMessages: 1 },
];

function Archieved({ navigation }) {
    const { height, width } = useWindowDimensions();

    const renderItem = ({ item }) => {
        return (
            <>
                <Pressable>
                    <HStack space="1" mt="6">
                        <Center w="20%">
                            <Box>
                                <Avatar
                                    bg="blue.900"
                                />
                            </Box>
                        </Center>
                        <Center w="60%" alignItems="flex-start">
                            <Box>
                                <Text bold color="#fff">{item.name}</Text>
                                <Text color="#fff">{item.message}</Text>
                            </Box>
                        </Center>
                        <Center w="20%" >
                            <Text color="#fff">{item.time}</Text>
                            <Text color="green.500">{item.noOfMessages}</Text>
                        </Center>
                    </HStack>
                </Pressable>
            </>
        );
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <PopoverThreeButton data={ArchieveMoreList} />

        });
    }, [navigation]);

    return (
        <Box height={height} bg="#111827">
            <VStack>
                <Center>
                    <FlatList
                        data={ChatsList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </Center>
            </VStack>
        </Box>
    );
}

export default memo(Archieved);