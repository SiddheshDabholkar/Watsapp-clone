import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "../tabs/Calls";
import Status from "../tabs/Status";
import Chats from "../tabs/Chats";

const Tab = createMaterialTopTabNavigator();

export default function WatsApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats}/>
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}
