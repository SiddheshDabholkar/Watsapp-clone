import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function IconTO({ children }) {
  return (
    <TouchableOpacity>
      <View style={styles.CircleShape}>
        <>{children}</>
      </View>
    </TouchableOpacity>
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
