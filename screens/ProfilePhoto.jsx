import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Dimensions, Share } from 'react-native';
import { Box, HStack, Image, Button, useDisclose } from 'native-base';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePhotoAdctionSheet from '../components/ProfilePhotoAdctionSheet';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ProfilePhoto({ navigation }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "Its my dp",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HStack space={3}>
                    <TouchableOpacity onPress={onOpen}>
                        <MaterialCommunityIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onShare}>
                        <Entypo name="share" size={24} color="black" />
                    </TouchableOpacity>
                </HStack>
            )
        });
    }, [navigation]);
    return (
        <>
            <Box flex={1} bg="#000" alignItems="center" justifyContent="center" >
                <Image
                    alt="Alternate Text"
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.image}
                />
            </Box >
            <ProfilePhotoAdctionSheet isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        height: height / 2.2,
        width: width,
    }
});