import React, { useEffect, useState } from "react";
import * as Contacts from 'expo-contacts';

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name],
            });
            data && setContacts(data);
        }
    }, []);

    return contacts;
}
