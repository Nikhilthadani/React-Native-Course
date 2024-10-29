import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import * as Contacts from "expo-contacts";
import MultiSelect from "react-native-multiple-select";

const getContactsPermission = async () => {
  const permission = await Contacts.getPermissionsAsync();
  if (permission.granted) {
    return true;
  }

  const firstPermission = await Contacts.requestPermissionsAsync();
  if (firstPermission.granted) {
    return true;
  }
  if (!firstPermission.canAskAgain) {
    return false;
  }
  const secondPermission = await Contacts.requestPermissionsAsync();
  if (secondPermission.granted) {
    return true;
  }

  return false;
};
const SelectContacts = ({ selectedContacts, setSelectedContacts }) => {
  const [contacts, setContacts] = useState([]);
  const onItemsChange = (data) => {
    console.log("DATA", data);

    setSelectedContacts(data);
  };
  useEffect(() => {
    async function getContacts() {
      const hasPermissions = await getContactsPermission();
      if (!hasPermissions) return;
      const contacts = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      setContacts(contacts.data);
    }
    getContacts();
  }, []);
  return (
    <View>
      <Text>SelectContacts</Text>
      {contacts.length > 0 && (
        <MultiSelect
          uniqueKey="id"
          items={contacts}
          onSelectedItemsChange={onItemsChange}
          selectedItems={selectedContacts}
        />
      )}
    </View>
  );
};

export default SelectContacts;

const styles = StyleSheet.create({});
