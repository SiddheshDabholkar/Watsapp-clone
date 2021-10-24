import React,{useContext,useEffect} from "react";
import { View, Text } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { PopupContext } from "../context/PopupContext";

export default function Calls() {
  const isFocused = useIsFocused();
  const {CurrentTabName,setCurrentTabName}=useContext(PopupContext)
  useEffect(()=>{
    isFocused && setCurrentTabName({type:"CALLS",payload:"CALLS"})
  },[isFocused])
  console.log("isCallFocused",isFocused)
  console.log("CurrentTabName",CurrentTabName.activeTab)
  return (
    <View>
      <Text>Callssss</Text>
    </View>
  );
}
