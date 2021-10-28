import React, { useEffect, useState } from "react";
import { View, Text, FlatList, VirtualizedList } from "react-native";
import * as Contacts from 'expo-contacts';
import { useRoute } from '@react-navigation/native';

export default function SelectContact() {
  const [contacts, setContacts] = useState([]);
  const { name } = useRoute();
  useEffect(async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name],
      });
      data && setContacts(data);
    }
  }, []);

  const renderItem = ({ item }) => <Text style={{ color: "#000" }}>{item.name}</Text>;
  return (
    <View>
      <Text>SelectContact</Text>
      <FlatList
        data={Object.values(contacts)}
        renderItem={renderItem}
        id={(item) => item.id}
      />
    </View>
  );
}
