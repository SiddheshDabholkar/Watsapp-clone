import React, { useLayoutEffect, memo, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Pressable, TouchableOpacity, StyleSheet } from "react-native";
//icons
import { FontAwesome } from "@expo/vector-icons";

import PopoverThreeButton from "../components/PopoverThreeButton";
import { PopupContext } from "../context/PopupContext";


const CallsData = [{ id: "1", navigateTo: "", name: "Clear call log" }, { id: "2", navigateTo: "Setting", name: "Setting" }];
const StatusData = [{ id: "1", navigateTo: "Status privacy", name: "Status privacy" }, { id: "2", navigateTo: "Setting", name: "Setting" }];
const ChatsData = [
  { id: "1", navigateTo: "", name: "New Group" },
  { id: "2", navigateTo: "", name: "New Broadcast" },
  { id: "3", navigateTo: "", name: "Linked devices" },
  { id: "4", navigateTo: "", name: "Starred messages" },
  { id: "5", navigateTo: "", name: "Payments" },
  { id: "6", navigateTo: "Setting", name: "Setting" },
];

import Calls from "../tabs/Calls";
import Status from "../tabs/Status";
import Chats from "../tabs/Chats";

const Tab = createMaterialTopTabNavigator();


function WatsApp({ navigation }) {
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);
  const activeTab = CurrentTabName.activeTab;

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
          <PopoverThreeButton data={activeTab === "CALLS" ? CallsData : activeTab === "CHATS" ? ChatsData : activeTab === "STATUS" ? StatusData : null} />
        </>
      ),
    });
  }, [navigation, activeTab]);

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

export default memo(WatsApp);