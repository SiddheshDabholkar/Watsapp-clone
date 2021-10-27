import React, { useState, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "../tabs/Calls";
import Status from "../tabs/Status";
import Chats from "../tabs/Chats";
import { useRoute } from "@react-navigation/core";
import { PopupContext } from "../context/PopupContext";

const Tab = createMaterialTopTabNavigator();

export default function WatsApp() {
  const { name } = useRoute()
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext)
  const activeTab = CurrentTabName.activeTab

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
