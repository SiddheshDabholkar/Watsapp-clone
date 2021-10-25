import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";

export default function Chats() {
  const isFocused = useIsFocused();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext)
  useEffect(() => {
    isFocused && setCurrentTabName({ type: "CHATS", payload: "CHATS" })
  }, [isFocused])

  return (
    <View>
      <Text>Chats</Text>
    </View>
  );
}
