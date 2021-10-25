import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import { Popover, Tooltip } from "react-native-popper";
//icons
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//screens
import WatsApp from "./screens/WatsApp";
import Camera from "./screens/camera";
import About from "./screens/About";
import Archieved from "./screens/Archieved";
import Profile from "./screens/Profile";
import SelectContact from "./screens/SelectContact";
//components
import HeaderPopover from "./components/Popover/HeaderPopover";
import { PopupContextProvider } from "./context/PopupContext";

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
                options={{
                  headerShadowVisible: false,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerRight: () => (
                    <>
                      <Pressable>
                        <TouchableOpacity style={styles.CircleShape}>
                          <FontAwesome name="search" size={18} color="black" />
                        </TouchableOpacity>
                      </Pressable>
                      <Popover
                        on="press"
                        placement="left"
                        trigger={
                          <Button
                            style={styles.CircleShape}
                            leftIcon={
                              <Icon
                                as={Entypo}
                                name="dots-three-vertical"
                                size={18}
                                color="black"
                              />
                            }
                          ></Button>
                        }
                        shouldOverlapWithTrigger={true}
                        shouldCloseOnOutsideClick={true}
                      >
                        <HeaderPopover />
                      </Popover>
                    </>
                  ),
                }}
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
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PopupContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  CircleShape: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
});
