import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getGroupsOfUser } from "../../sql/group-member/get";
import GroupListRenderItem from "./GroupListRenderItem";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const {
    user: { id },
  } = useAuth();
  useEffect(() => {
    getGroupsOfUser(+id)
      .then(setGroups)
      .catch((err) => console.log(err));
  }, []);
  return (
    groups.length > 0 && (
      <FlatList
        style={styles.list}
        data={groups}
        renderItem={(info) => <GroupListRenderItem group={info.item} />}
      />
    )
  );
};
export default GroupList;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
});
