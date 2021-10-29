import React, { useContext } from "react";
import { Text, StyleSheet, View, Dimensions, FlatList } from "react-native";
import { PopupContext } from "../context/PopupContext";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./PopoverThreeButton";

const { width, height } = Dimensions.get("window");


const CallsData = [{ id: "1", navigateTo: "", name: "Clear call log" }, { id: "2", navigateTo: "Settings", name: "Setting" }];
const StatusData = [{ id: "1", navigateTo: "", name: "Status privacy" }, { id: "2", navigateTo: "Setting", name: "Setting" }];
const ChatsData = [
  { id: "1", navigateTo: "", name: "New Group" },
  { id: "2", navigateTo: "", name: "New Broadcast" },
  { id: "3", navigateTo: "", name: "Linked devices" },
  { id: "4", navigateTo: "", name: "Starred messages" },
  { id: "5", navigateTo: "", name: "Payments" },
  { id: "6", navigateTo: "Setting", name: "Setting" },
];

export default function HeaderPopover() {
  const { navigate } = useNavigation();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);
  const activeTab = CurrentTabName.activeTab;
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.Text}
        onPress={() => navigate(`${item.navigateTo}`)}
      >{item.name}</Text>
    );
  };
  return (
    <>
      <FlatList
        data={activeTab === "CALLS" ? CallsData : activeTab === "CHATS" ? ChatsData : activeTab === "STATUS" ? StatusData : null}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
    </>
  );
}

