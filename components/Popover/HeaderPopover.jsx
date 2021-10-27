import React, { useContext } from "react";
import { Text, StyleSheet, View, Dimensions, FlatList } from "react-native";
import { Popover } from "react-native-popper";
import { PopupContext } from "../../context/PopupContext";
import { useNavigation } from '@react-navigation/native'
import { Box } from "native-base"

const { width, height } = Dimensions.get("window");

const CallsData = [{ id: "1", navigateTo: "", name: "Clear call log" }, { id: "2", navigateTo: "", name: "Setting" }];
const StatusData = [{ id: "1", navigateTo: "", name: "Status privacy" }, { id: "2", navigateTo: "", name: "Setting" }];
const ChatsData = [
  { id: "1", navigateTo: "", name: "New Group" },
  { id: "2", navigateTo: "", name: "New Broadcast" },
  { id: "3", navigateTo: "", name: "Linked devices" },
  { id: "4", navigateTo: "", name: "Starred messages" },
  { id: "5", navigateTo: "", name: "Payments" },
  { id: "6", navigateTo: "", name: "Setting" },
];

export default function HeaderPopover() {
  const { navigate } = useNavigation()
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext)
  const activeTab = CurrentTabName.activeTab
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.Text}
        onPress={() => navigate(`${item.navigateTo}`)}
      >{item.name}</Text>
    )
  };
  return (
    <>
      <Popover.Backdrop />
      <Popover.Content >
        <Box
          bg="gray.700"
          style={styles.Container}
        >
          <FlatList
            data={activeTab === "CALLS" ? CallsData : activeTab === "CHATS" ? ChatsData : activeTab === "STATUS" ? StatusData : null}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Box>
      </Popover.Content>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 2,
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
  }
});
