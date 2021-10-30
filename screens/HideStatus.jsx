import React, { memo, useState } from 'react';
import { FlatList, TouchableHighlight, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { VStack, HStack, Box, Text, Center, Avatar, Divider, Checkbox, Icon, Fab } from 'native-base';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const UserList = [
    { selected: 1, id: 1, name: "one" },
    { selected: 0, id: 2, name: "two" },
    { selected: 0, id: 3, name: "three" },
    { selected: 0, id: 4, name: "four" },
    { selected: 1, id: 5, name: "five" },
    { selected: 0, id: 6, name: "six" },
    { selected: 1, id: 7, name: "seven" },
    { selected: 1, id: 8, name: "eight" },
    { selected: 0, id: 9, name: "nine" },
    { selected: 1, id: 10, name: "ten" },
    { selected: 1, id: 11, name: "eleven" },
    { selected: 0, id: 12, name: "twelve" },
];


export default function HideStatus({ navigation }) {
    const isFocused = useIsFocused();
    const [checkBoxData, setCheckboxData] = useState(UserList);

    const renderItem = ({ item }) => {
        let bouncyCheckboxRef = null;
        return (
            <TouchableOpacity onPress={() => bouncyCheckboxRef?.onPress()} >
                <HStack space={2} mt={3}>
                    <Center w="15%">
                        <Box>
                            <Avatar
                                bg="green.300"
                            />
                        </Box>
                    </Center>
                    <Center w="65%" alignItems="flex-start">
                        <Text color="#fff">{item.name}</Text>
                        <Divider bg="#1f2937" thickness="0.2" my={1} />
                    </Center>
                    <Center w="20%">
                        <BouncyCheckbox
                            ref={ref => bouncyCheckboxRef = ref}
                            size={25}
                            fillColor="red"
                            disableText="true"
                            unfillColor="transparent"
                            iconStyle={{ borderColor: "#1f2937" }}
                            onPress={(isChecked) => {
                                const newData = checkBoxData.map(m => {
                                    if (m.id === item.id) {
                                        if (m.selected == 0) {
                                            m.selected = 1;
                                        } else {
                                            m.selected = 0;
                                        }
                                    }
                                    return m;
                                });
                                setCheckboxData(newData);
                            }}
                        />
                    </Center>
                </HStack >
            </ TouchableOpacity>
        );
    };

    return (
        <>
            <Box flex={1} bg="#111827">
                <VStack>
                    <FlatList
                        data={checkBoxData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </VStack>
            </Box>
            {
                isFocused &&
                <Fab
                    onPress={() => navigate("Status privacy")}
                    position="absolute"
                    size="50"
                    icon={
                        <Feather name="check" size={20} color="white" />
                    }
                />
            }
        </>
    );
}

