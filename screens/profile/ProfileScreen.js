import { Image, StyleSheet, View } from "react-native";
import React from "react";
import User from "../../assets/user.png";
import { Button, MD3Colors } from "react-native-paper";
import { FONTS } from "../../utils/constants";
import { Text } from "react-native";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={User} />
      <Text style={styles.name}>James William</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, alias
        dolore fugiat debitis placeat voluptates fuga provident eveniet labore,
        deserunt sapiente dolores quibusdam expedita. Voluptate mollitia facere
        debitis dolorem perferendis?
      </Text>
      <Text style={styles.description}>+91987654321</Text>
      <Text style={styles.description}>james@gmail.com</Text>
      <Button onPress={() => console.log("Calling")} icon={"phone"}>
        Call James
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: MD3Colors.error80,
    borderRadius: 200 / 2,
    marginVertical: 20,
    padding: 4,
  },
  name: {
    fontFamily: FONTS.WorkSans,
    fontSize: 23,
  },
  description: {
    fontFamily: FONTS.WorkSansItalic,
    fontSize: 19,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
