import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import { Popover, Tooltip } from "react-native-popper";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import WatsApp from "./screens/WatsApp";
import Camera from "./screens/camera";

import HeaderPopover from "./components/Popover/HeaderPopover";
import { PopupContextProvider } from "./context/PopupContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </PopupContextProvider>
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
