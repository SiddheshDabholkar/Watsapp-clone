import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Fab, Icon } from 'native-base';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";
import { MaterialIcons } from '@expo/vector-icons';


export default function Calls({ route }) {
  const isFocused = useIsFocused();
  const { navigate } = useNavigation()
  const { CurrentTabName, setCurrentTabName } = useContext(PopupContext)

  useEffect(() => {
    isFocused && setCurrentTabName({ type: "CALLS", payload: "CALLS" })
  }, [isFocused])
  return (
    <>
      <View>
        <Text>Callssss</Text>
      </View>
      {isFocused &&
        <Fab
          onPress={() => navigate("SelectContact")}
          position="absolute"
          size="75"
          icon={<Icon color="white" as={<MaterialIcons name="add-call" size={24} color="black" />} size="sm" />}
        />
      }
    </>
  );
}
