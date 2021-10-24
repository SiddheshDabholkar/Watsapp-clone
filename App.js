import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import WatsApp from "./screens/WatsApp";
import Camera from "./screens/camera";
import IconTO from "./components/IconTO";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
                  <IconTO>
                    <FontAwesome name="search" size={18} color="black" />
                  </IconTO>
                  <IconTO>
                    <Entypo
                      name="dots-three-vertical"
                      size={18}
                      color="black"
                    />
                  </IconTO>
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
  );
}
