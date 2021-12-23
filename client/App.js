import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PopupContextProvider } from "./context/PopupContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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

import WelcomeToWatsapp from "./PreAuthScreens/WelcomeToWatsapp";
import EnterYourPhoneNumber from "./PreAuthScreens/EnterYourPhoneNumber";
import ChooseACountry from "./PreAuthScreens/ChooseACountry";
import VerifyPhoneNumber from "./PreAuthScreens/VerifyPhoneNumber";
import ProfileInfo from "./PreAuthScreens/ProfileInfo";

// const client = new ApolloClient({
//   uri: "127.0.0.1:4000/graphql",
//   // cache: new InMemoryCache(),
// });

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
      {/* <ApolloProvider client={client}> */}
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
              <Stack.Screen
                name="WelcomeToWatsapp"
                component={WelcomeToWatsapp}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="EnterYourPhoneNumber"
                component={EnterYourPhoneNumber}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="VerifyPhoneNumber"
                component={VerifyPhoneNumber}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProfileInfo"
                component={ProfileInfo}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="Choose A Country"
                component={ChooseACountry}
              />
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
      {/* </ApolloProvider> */}
    </>
  );
}
