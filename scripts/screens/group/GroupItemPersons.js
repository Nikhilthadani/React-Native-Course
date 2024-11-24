import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useAppState } from "../../context/AppStateProvider";
import { getMembersOfGroup } from "../../sql/group-member/get";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
const RenderItem = ({ data }) => {
  return (
    <View
      style={{
        padding: 20,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 2,
        flexDirection: "row",
        gap: 15,
        marginHorizontal: 10,
      }}
    >
      <Icon name="user-circle" size={40} />
      <View style={{}}>
        <Text>{data.name}</Text>
        <Text>{data.phone}</Text>
      </View>
    </View>
  );
};
const GroupItemPersons = () => {
  const nav = useNavigation();
  const [members, setMembers] = useState([]);
  const { selectedGroup } = useAppState();
  console.log(selectedGroup);
  useLayoutEffect(() => {
    getMembersOfGroup(+selectedGroup.id)
      .then(setMembers)
      .catch((er) => console.log(er));

    nav.addListener("focus", () => {
      getMembersOfGroup(+selectedGroup.id)
        .then(setMembers)
        .catch((er) => console.log(er));
    });
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

      <FlatList
        data={members}
        renderItem={(info) => <RenderItem data={info.item} />}
      />
    </View>
  );
};

export default GroupItemPersons;

const styles = StyleSheet.create({});
