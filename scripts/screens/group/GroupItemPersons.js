import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useAppState } from "../../context/AppStateProvider";
import { getMembersOfGroup } from "../../sql/group-member/get";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";

const GroupItemPersons = () => {
  const nav = useNavigation();
  const [members, setMembers] = useState([]);
  const { selectedGroup } = useAppState();
  console.log(selectedGroup);
  useLayoutEffect(() => {
    getMembersOfGroup(+selectedGroup.id)
      .then(setMembers)
      .catch((er) => console.log(er));
  }, []);
  const navigateToAddMembers = () => {
    nav.navigate(GroupScreens.AddGroupMembers, { members });
  };
  return (
    <View>
      <Button
        onPress={navigateToAddMembers}
        style={{ width: 300, marginVertical: 10, marginHorizontal: "auto" }}
        mode="contained-tonal"
      >
        Add New Members
      </Button>
      <Text>GroupItemPersons</Text>
      <Text style={{ borderWidth: 1, padding: 10 }}>
        {JSON.stringify(members)}
      </Text>
    </View>
  );
};

export default GroupItemPersons;

const styles = StyleSheet.create({});
