import React from "react";
import { View, Text } from "react-native";
import CountryFlagEmoji from "country-flag-emoji";

export default function ChooseACountry() {
  const { data } = CountryFlagEmoji;
  console.log("data", data);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
