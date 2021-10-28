import React from 'react';
import { Popover } from "react-native-popper";
import { Button, Icon, Box } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function PopoverThreeButton({ children }) {
    return (
        <Popover
            on="press"
            placement="left"
            trigger={
                <Button
                    style={styles.CircleShape}
                    leftIcon={
                        <Icon
                            as={Entypo}
                            name="dots-three-vertical"
                            size={18}
                            color="black"
                        />
                    }
                ></Button>
            }
            shouldOverlapWithTrigger={true}
            shouldCloseOnOutsideClick={true}
        >
            <Popover.Backdrop />
            <Popover.Content>
                <Box
                    bg="gray.700"
                    style={styles.Container}
                >
                    {children}
                </Box>
            </Popover.Content>
        </Popover>
    );
}

const styles = StyleSheet.create({
    CircleShape: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "transparent",
    },
    Container: {
        flex: 1,
        marginRight: 0,
        width: width / 2.4,
        backgroundColor: "#3f3f46",
        borderRadius: 4,
        padding: 20,
        height: "auto",
    },
    Text: {
        marginTop: 10,
        marginBottom: 10,
        color: "#fff",
        fontSize: 16,
    },
});