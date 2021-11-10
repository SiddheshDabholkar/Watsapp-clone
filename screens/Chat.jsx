import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Chat({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HStack space={3}>
                    <TouchableOpacity onPress={onOpen}>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onOpen}>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onOpen}>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </HStack>
            )
        });
    }, [navigation]);
    return (
        <View>
            <Text></Text>
        </View>
    );
}
