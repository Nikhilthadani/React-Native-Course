import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { getActivitiesOfUser } from "../../sql/activity/get";
import { useAuth } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";

const RenderActivityItem = ({ data }) => {
  return (
    <View
      style={{
        margin: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E5E1DA",
        elevation: 2,
      }}
    >
      <Text>{data.activity}</Text>
    </View>
  );
};
const AllActivities = () => {
  const [activities, setActivities] = useState([]);
  const nav = useNavigation();
  const {
    user: { id },
  } = useAuth();

  useLayoutEffect(() => {
    getActivitiesOfUser(id)
      .then(setActivities)
      .catch((err) => console.log(err));

    nav.addListener("focus", () => {
      getActivitiesOfUser(id)
        .then(setActivities)
        .catch((err) => console.log(err));
    });
  }, []);
  return (
    <View>
      <Text style={styles.text}>Activities of User:</Text>
      {activities.length > 0 && (
        <FlatList
          data={activities}
          renderItem={(info) => <RenderActivityItem data={info.item} />}
        />
      )}
    </View>
  );
};

export default AllActivities;

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    textAlign: "center",
    margin: 5,
    fontSize: 20,
  },
});
