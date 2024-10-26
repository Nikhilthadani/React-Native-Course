import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useAuth } from "../../context/AuthProvider";
import { createNewGroup } from "../../sql/group/create";
const AddNewGroup = () => {
  const {
    user: { id },
  } = useAuth();
  const [groupName, setGroupName] = useState("");
  const nav = useNavigation();
  const addNewGroup = async () => {
    if (!groupName || groupName.trim() === "") return;

    console.log("Group Name: ", groupName);
    try {
      const groupId = await createNewGroup(groupName, +id);
      alert(`Group created with id: ${groupId}`);
    } catch (error) {
      console.log("Error occurred while addNewGroup: ", error);
    }
  };
  const SCREEN_OPTIONS = {
    headerShown: true,
    headerRight: (props) => (
      <Button {...props} mode="text" onPress={addNewGroup}>
        Done
      </Button>
    ),
    headerLeft: (props) => (
      <IconButton icon={"close"} {...props} onPress={nav.goBack} />
    ),
    headerShadowVisible: false,
  };
  useLayoutEffect(() => {
    nav.setOptions({ ...SCREEN_OPTIONS });
  }, [nav, SCREEN_OPTIONS]);

  return (
    <View style={styles.container}>
      <View style={styles.groupDetails}>
        <View style={styles.photoContainer}>
          <Icon name="add-photo-alternate" size={30} />
        </View>
        <View style={styles.inputCont}>
          <TextInput
            value={groupName}
            onChangeText={setGroupName}
            mode="flat"
            placeholder="Group Name"
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

export default AddNewGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  groupDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  photoContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "green",
    padding: 3,
  },
  inputCont: {
    width: 300,
    maxWidth: 300,
  },
  input: {
    fontSize: 20,
  },
});
