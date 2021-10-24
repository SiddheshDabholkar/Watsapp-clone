import React, { useContext } from "react";
import { Text, StyleSheet, View, Dimensions, FlatList } from "react-native";
import { Popover } from "react-native-popper";
import { PopupContext } from "../../context/PopupContext";

const { width, height } = Dimensions.get("window");

const CallsData = [{ id: "1", name: "Clear call log" }, { id: "2", name: "Setting" }];
const StatusData = [{ id: "1", name: "Status privacy" }, { id: "2", name: "Setting" }];
const ChatsData = [
  { id: "1", name: "New Group" },
  { id: "2", name: "New Broadcast" },
  { id: "3", name: "Linked devices" },
  { id: "4", name: "Starred messages" },
  { id: "5", name: "Payments" },
  { id: "6", name: "Setting" },
];

export default function HeaderPopover() {
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext)
  const activeTab = CurrentTabName.activeTab
  const renderItem = ({ item }) => {
    return (
      <Text style={{ color: "#000" }}>{item.name}</Text>
    )
  };
  return (
    <>
      <Popover.Backdrop />
      <Popover.Content>
        <View style={styles.Container}>
          <FlatList
            data={activeTab === "CALLS" ? CallsData : activeTab === "CHATS" ? ChatsData : activeTab === "STATUS" ? StatusData : null}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </Popover.Content>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 2,
    marginRight: 0,
    width: width / 2.4,
    backgroundColor: "#fff",
    borderRadius: 4,
    height: "auto",
  },
});
