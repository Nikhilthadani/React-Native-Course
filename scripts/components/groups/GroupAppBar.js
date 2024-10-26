import { StyleSheet, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";

const GroupAppBar = () => {
  const nav = useNavigation();
  const navigateToAddScreen = () => {
    nav.navigate(GroupScreens.AddGroup);
  };

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action icon={"magnify"} onPress={() => alert("Search")} />
        <Appbar.Action
          icon={"account-multiple-plus-outline"}
          onPress={navigateToAddScreen}
        />
      </Appbar.Header>
    </View>
  );
};

export default GroupAppBar;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "transparent",
    marginLeft: "auto",
  },
});
