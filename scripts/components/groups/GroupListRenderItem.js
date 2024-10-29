import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";
import { useAppState } from "../../context/AppStateProvider";
const GroupListRenderItem = ({ group }) => {
  console.log("GROUP", group);

  const { setSelectedGroup } = useAppState();
  const nav = useNavigation();

  const navigateToGroupScreen = () => {
    setSelectedGroup({ id: group.id, name: group.group_name });
    nav.navigate(GroupScreens.GroupItem);
  };
  return (
    <TouchableOpacity onPress={navigateToGroupScreen} style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.groupText}>{group.group_name}</Text>
          <Text style={styles.smallText}>
            Created At: {new Date(group.created_at).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={{ color: "white" }} name="account" size={20} />
          <Text style={styles.smallText}>{3}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupListRenderItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get("window").width - 50,
    margin: "auto",
    backgroundColor: "#1e2420",
    shadowColor: "#000",
    shadowOffset: { height: 10 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation: 10,
  },
  itemContainer: {
    flex: 1,
    height: 100,
    maxHeight: 100,
  },
  groupContainer: { flexDirection: "row" },
  groupText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  smallText: {
    color: "white",
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});
