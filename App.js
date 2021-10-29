import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PopupContextProvider } from "./context/PopupContext";
//screens
import WatsApp from "./screens/WatsApp";
import Camera from "./screens/camera";
import About from "./screens/About";
import Archieved from "./screens/Archieved";
import Profile from "./screens/Profile";
import SelectContact from "./screens/SelectContact";
import Setting from "./screens/Setting";
import CallsInfo from "./screens/CallsInfo";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PopupContextProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="WatsApp"
                component={WatsApp}
              />
              <Stack.Screen
                name="Camera"
                component={Camera}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="About"
                component={About}
              />
              <Stack.Screen
                name="Archieved"
                component={Archieved}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
              />
              <Stack.Screen
                name="SelectContact"
                component={SelectContact}
              />
              <Stack.Screen
                name="Setting"
                component={Setting}
              />
              <Stack.Screen
                name="Calls Info"
                component={CallsInfo}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PopupContextProvider>
    </>
  );
}

