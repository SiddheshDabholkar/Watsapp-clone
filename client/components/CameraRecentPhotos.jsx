import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, VirtualizedList } from "react-native";
import { Box, Text, Image, Center } from "native-base";
import useDeviceMedia from "../hooks/useDeviceMedia";

export default function CameraRecentPhotos() {
  const assets = useDeviceMedia();
  console.log("assets", assets);
  const renderItem = ({ item }) => {
    return (
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.image}
        alt={item.id}
      />
    );
  };

  return (
    <Box bg="#000" height="95%">
      {assets ? (
        <FlatList
          data={assets.assets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          initialNumToRender={6}
        />
      ) : (
        <Text>loading....</Text>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 90,
  },
});
