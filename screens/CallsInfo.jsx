import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import PopoverThreeButton from '../components/PopoverThreeButton';

const CallLogData = [
    { id: 1, name: "Remove from call log", navigateTo: "" },
    { id: 2, name: "Block", navigateTo: "" },
];

export default function CallsInfo({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PopoverThreeButton data={CallLogData} />
            )
        });
    }, [navigation]);
    return (
        <View>
            <Text>CallsInfo</Text>
        </View>
    );
}
