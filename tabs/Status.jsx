import React, { useContext, useEffect, memo } from "react";
import { Text, View, Button } from "react-native";
import { Fab, Icon } from 'native-base';
import { useIsFocused, useNavigation, } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";
import { Ionicons } from '@expo/vector-icons';

function Status() {
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext);

  useEffect(() => {
    isFocused && setCurrentTabName({ type: "STATUS", payload: "STATUS" });
  }, [isFocused]);

  return (
    <>
      <View>
        <Button title="Camera" onPress={() => navigate("Camera")} />
        <Text>lmao</Text>
      </View>
      {isFocused &&
        < Fab
          onPress={() => navigate("Camera")}
          position="absolute"
          size="75"
          icon={<Icon color="white" as={<Ionicons name="ios-camera" size={24} color="black" />} size="sm" />}
        />
      }
    </>
  );
}

export default memo(Status);