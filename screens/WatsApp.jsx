import React, { useLayoutEffect, memo, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PopoverThreeButton from "../components/PopoverThreeButton";
import { PopupContext } from "../context/PopupContext";


const CallsData = [{ id: "1", navigateTo: "", name: "Clear call log" }, { id: "2", navigateTo: "Setting", name: "Setting" }];
const StatusData = [{ id: "1", navigateTo: "Status privacy", name: "Status privacy" }, { id: "2", navigateTo: "Setting", name: "Setting" }];
const ChatsData = [
  { id: "1", navigateTo: "", name: "New Group" },
  { id: "2", navigateTo: "", name: "New Broadcast" },
  { id: "3", navigateTo: "Linked devices", name: "Linked devices" },
  { id: "4", navigateTo: "", name: "Starred messages" },
  { id: "5", navigateTo: "", name: "Payments" },
  { id: "6", navigateTo: "Setting", name: "Setting" },
];

import Calls from "../tabs/Calls";
import Status from "../tabs/Status";
import Chats from "../tabs/Chats";
import Camera from "./Camera";

const Tab = createMaterialTopTabNavigator();


function WatsApp({ navigation, route }) {
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
          <PopoverThreeButton data={activeTab === "CALLS" ? CallsData : activeTab === "CHATS" ? ChatsData : activeTab === "STATUS" && StatusData} />
        </>
      ),
    });
  }, [activeTab]);

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



export default memo(WatsApp);