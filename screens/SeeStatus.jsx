import React, { useLayoutEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Box, Text, HStack, VStack, Icon, Avatar, Image, Center, useDisclose } from 'native-base';
import PopoverThreeButton from '../components/PopoverThreeButton';
import { FontAwesome } from '@expo/vector-icons';
import StatusReplyModal from '../components/StatusReplyModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Data = [
    { id: 1, name: "Mute", navigateTo: "" },
    { id: 2, name: "View contact", navigateTo: "ViewContact" },
];

export default function SeeStatus({ navigation, route }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    const { avatar, name } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerRight: () => (
                <PopoverThreeButton data={Data} color="#fff" />
            ),
            headerTitle: (props) => (
                <TouchableOpacity onPress={() => navigation.navigate("ViewContact")}>
                    <HStack {...props} space={2} alignItems="flex-start">
                        <Avatar
                            size="41"
                            bg="lightBlue.400"
                        />
                        <VStack>
                            <Text color="#fff">{name}</Text>
                            <Text color="#fff">12:50 PM</Text>
                        </VStack>
                    </HStack>
                </TouchableOpacity>
            )
        });
    }, [navigation]);
    return (
        <>
            <Box flex={1} bg="#000" alignItems="center" justifyContent="center" >
                <Center>
                    <VStack space={2} >
                        <Center h="90%">
                            <Image
                                alt="Alternate Text"
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                                style={styles.image}
                            />
                        </Center>
                        {!isOpen &&
                            <Center h="10%">
                                <TouchableOpacity onPress={onOpen}>
                                    <Center>
                                        <VStack >
                                            <Center ml="2">
                                                <Icon
                                                    as={FontAwesome}
                                                    name="angle-up"
                                                    size={5}
                                                    color="#fff"
                                                />
                                            </Center>
                                            <Center>
                                                <Text color="#fff">Reply</Text>
                                            </Center>
                                        </VStack>
                                    </Center>
                                </TouchableOpacity>
                            </Center>
                        }
                    </VStack>
                </Center>
            </Box >
            <StatusReplyModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} img={"https://reactnative.dev/img/tiny_logo.png"} />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        height: height / 1.5,
        width: width / 1.04,
    }
});