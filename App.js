import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PopupContextProvider } from "./context/PopupContext";
//screens
import WatsApp from "./screens/WatsApp";
import Camera from "./screens/Camera";
import About from "./screens/About";
import Archieved from "./screens/Archieved";
import Profile from "./screens/Profile";
import SelectContact from "./screens/SelectContact";
import Setting from "./screens/Setting";
import CallsInfo from "./screens/CallsInfo";
import StatusPrivacy from "./screens/StatusPrivacy";
import HideStatus from "./screens/HideStatus";
import ShareStatus from "./screens/ShareStatus";
import ContactsHelp from "./screens/ContactsHelp";
import ArchiveSettings from "./screens/ArchiveSettings";
import ProfilePhoto from "./screens/ProfilePhoto";
import Linkedevices from "./screens/Linkedevices";
import SeeStatus from "./screens/SeeStatus";
import ViewContact from "./screens/ViewContact";
import InviteAFriend from "./screens/InviteAFriend";
import Chat from "./screens/Chat";
import { connectToDevTools } from "react-devtools-core";

const Stack = createNativeStackNavigator();

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

export default function App() {
  return (
    <>
      <PopupContextProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#1e2229",
                },
                headerTintColor: "gray",
              }}
            >
              <Stack.Screen name="WatsApp" component={WatsApp} />
              <Stack.Screen name="Camera" component={Camera} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="Archieved" component={Archieved} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="SelectContact" component={SelectContact} />
              <Stack.Screen name="Setting" component={Setting} />
              <Stack.Screen name="Calls Info" component={CallsInfo} />
              <Stack.Screen name="Status privacy" component={StatusPrivacy} />

              <Stack.Screen
                name="Share status with..."
                component={ShareStatus}
              />

              <Stack.Screen name="Hide status from..." component={HideStatus} />
              <Stack.Screen name="Contacts help" component={ContactsHelp} />
              <Stack.Screen
                name="Archive settings"
                component={ArchiveSettings}
              />
              <Stack.Screen name="Profile Photo" component={ProfilePhoto} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="Linked devices" component={Linkedevices} />
              <Stack.Screen name="SeeStatus" component={SeeStatus} />
              <Stack.Screen name="ViewContact" component={ViewContact} />
              <Stack.Screen name="Invite a friend" component={InviteAFriend} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PopupContextProvider>
    </>
  );
}
