import { StyleSheet, Text, View, RefreshControl } from "react-native";
import React, { useState } from "react";
import SelectContacts from "../../components/friends/SelectContacts";
import { Button } from "react-native-paper";
import { createFriendTransaction } from "../../sql/friends/add";
import { useAuth } from "../../context/AuthProvider";

const AddFriend = () => {
  const {
    user: { id },
  } = useAuth();
  const [selectedContacts, setSelectedContacts] = useState([]);
  console.log(selectedContacts);
  const addAsFriend = async () => {
    console.log(selectedContacts);
    try {
      const res = await createFriendTransaction(selectedContacts, +id);
      alert("USER CREATED");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button onPress={addAsFriend} mode="contained" style={styles.button}>
        Add Friend
      </Button>
      <SelectContacts
        selectedContacts={selectedContacts}
        setSelectedContacts={setSelectedContacts}
      />
    </View>
  );
};

export default AddFriend;

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    marginTop: 20,
    width: 200,
    marginHorizontal: "auto",
  },
});
