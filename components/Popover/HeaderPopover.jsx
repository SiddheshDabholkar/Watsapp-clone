import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Popover } from "react-native-popper";

const { width, height } = Dimensions.get("window");

const CallsData = [{ name: "Clear call log" }, { name: "Setting" }];
const StatusData = [{ name: "Status privacy" }, { name: "Setting" }];
const ChatsData = [
  { name: "New Group" },
  { name: "New Broadcast" },
  { name: "Linked devices" },
  { name: "Starred messages" },
  { name: "Payments" },
  { name: "Setting" },
];

export default function HeaderPopover({ navigation }) {
  console.log(navigation);
  return (
    <>
      <Popover.Backdrop />
      <Popover.Content>
        <View style={styles.Container}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nulla
            inventore ipsam dolor, porro cumque tempore omnis modi consequatur
            sed ab. Praesentium placeat, asperiores aut aliquid vitae illum ipsa
            delectus!
          </Text>
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
    backgroundColor: "#000",
    borderRadius: 4,
    height: "auto",
  },
});
