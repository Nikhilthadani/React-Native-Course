import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import SelectContacts from "../../components/friends/SelectContacts";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../../context/AppStateProvider";
import { Button } from "react-native-paper";
import { createNewGroupMembersTransaction } from "../../sql/group/create";

const AddGroupMembers = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const nav = useNavigation();
  const { selectedGroup } = useAppState();

  const addNewMembers = async () => {
    if (selectedContacts.length === 0) {
      console.log("No contacts");
      return;
    }
    console.log("Adding members", selectedContacts);

    try {
      await createNewGroupMembersTransaction(
        selectedContacts,
        selectedGroup.id
      );
      alert("Success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    nav.setOptions({
      title: selectedGroup?.name,
      headerRight: (props) => (
        <Button {...props} mode="text" onPress={addNewMembers.bind(this)}>
          Done
        </Button>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New members </Text>
      <Button onPress={addNewMembers}>Add contacts</Button>
      <SelectContacts
        selectedContacts={selectedContacts}
        setSelectedContacts={setSelectedContacts}
      />
    </View>
  );
};

export default AddGroupMembers;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 50,
    marginHorizontal: "auto",
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});
