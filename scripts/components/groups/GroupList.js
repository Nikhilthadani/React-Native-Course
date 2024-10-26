import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getGroupsOfUser } from "../../sql/group-member/get";

const GroupList = () => {
  const {
    user: { id },
  } = useAuth();
  useEffect(() => {
    getGroupsOfUser(+id);
  }, []);
  return (
    <View>
      <Text>GroupList</Text>
    </View>
  );
};

export default GroupList;

const styles = StyleSheet.create({});
