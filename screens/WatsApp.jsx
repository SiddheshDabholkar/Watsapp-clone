import React, { useLayoutEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import { Popover } from "react-native-popper";
//icons
import { FontAwesome, Entypo } from "@expo/vector-icons";
import HeaderPopover from "../components/HeaderPopover";

import Calls from "../tabs/Calls";
import Status from "../tabs/Status";
import Chats from "../tabs/Chats";

const Tab = createMaterialTopTabNavigator();

export default function WatsApp({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <>
          <Pressable>
            <TouchableOpacity style={styles.CircleShape}>
              <FontAwesome name="search" size={18} color="black" />
            </TouchableOpacity>
          </Pressable>
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
            <HeaderPopover />
          </Popover>
        </>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </>
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
});
