import React, { useState, useRef, useEffect } from "react";
import { Popover } from "react-native-popper";
import { Button, Icon, Box, Text, Input } from "native-base";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function PopoverThreeButton({ children, data, color }) {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const { navigate } = navigation;
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.Text} onPress={() => navigate(`${item.navigateTo}`)}>
        {item.name}
      </Text>
    );
  };
  const handleSearchPress = () => {
    setShow(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handleSearchPress}>
        <FontAwesome name="search" size={18} color="gray" />
      </TouchableOpacity>
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
                color={color ? color : "gray.500"}
              />
            }
          ></Button>
        }
        shouldOverlapWithTrigger={true}
        shouldCloseOnOutsideClick={true}
      >
        <Popover.Backdrop />
        <Popover.Content>
          <Box bg="gray.700" style={styles.Container}>
            {data && (
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            )}
            {children}
          </Box>
        </Popover.Content>
      </Popover>
    </>
  );
}

export const styles = StyleSheet.create({
  CircleShape: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  Container: {
    flex: 1,
    marginRight: 0,
    width: width / 2.4,
    backgroundColor: "#3f3f46",
    borderRadius: 4,
    padding: 20,
    height: "auto",
  },
  Text: {
    marginTop: 10,
    marginBottom: 10,
    color: "#fff",
    fontSize: 16,
  },
});
