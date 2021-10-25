import React, { useContext } from 'react'
import { Fab, Icon } from 'native-base';
import { PopupContext } from "../../context/PopupContext"
//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';



export default function Main() {
    const { CurrentTabName } = useContext(PopupContext)
    const navigation = useContext(NavigationContext);
    const activeTab = CurrentTabName.activeTab
    return (
        <>
            {
                activeTab === "CHATS" ?
                    <Fab
                        onPress={() => navigation.navigate("SelectContact")}
                        position="absolute"
                        size="75"
                        icon={<Icon color="white" as={<MaterialIcons name="chat" size={24} color="black" />} size="sm" />}
                    />
                    : activeTab === "CALLS" ?
                        <Fab
                            onPress={() => navigation.navigate("SelectContact")}
                            position="absolute"
                            size="75"
                            icon={<Icon color="white" as={<MaterialIcons name="add-call" size={24} color="black" />} size="sm" />}
                        />
                        : activeTab === "STATUS"
                            ?
                            <Fab
                                onPress={() => navigation.navigate("Camera")}
                                position="absolute"
                                size="75"
                                icon={<Icon color="white" as={<Ionicons name="ios-camera" size={24} color="black" />} size="sm" />}
                            />
                            : null
            }
        </>
    )
}

