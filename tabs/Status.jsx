import React,{useContext,useEffect} from "react";
import { Text, View, Button } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";

export default function Status({ navigation }) {
  const isFocused = useIsFocused();
  const {CurrentTabName,setCurrentTabName}=useContext(PopupContext)
  useEffect(()=>{
    isFocused && setCurrentTabName({type:"STATUS",payload:"STATUS"})
  },[isFocused])
  console.log("isCallFocused",isFocused)
  console.log("CurrentTabName",CurrentTabName.activeTab)
  return (
    <View>
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      <Text>lmao</Text>
    </View>
  );
}
