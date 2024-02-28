import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, MD3Colors, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { deleteDb, initDb } from "../../db";
import { useDispatch } from "react-redux";
import CREATE_PRODUCT_THUNK from "../../store/thunks-queries/CreateProductThunk";
import LocationPikcer from "../../components/LocationPikcer";
import { ApplicationScreens, FONTS } from "../../utils/constants";
const getPermissions = async () => {
  let permissions;
  permissions = await ImagePicker.requestCameraPermissionsAsync();
  if (permissions.granted) {
    return true;
  } else {
    if (permissions.canAskAgain) {
      permissions = await ImagePicker.requestCameraPermissionsAsync();
      if (permissions.granted) return true;
    } else {
      return false;
    }
  }
};
const AddNewProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    console.log(name, description, price, category);
    dispatch(
      CREATE_PRODUCT_THUNK({
        name,
        description,
        category,
        price,
        image,
        id: Date.now(),
        lat: 100.1,
        lng: 100.1,
      })
    );
    navigation.navigate(ApplicationScreens.HOME_TAB);
  };

  const imagePicker = async () => {
    const isAuthrozed = await getPermissions();
    if (!isAuthrozed) {
      return;
    } else {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(image);
      setImage(image.assets[0].uri);
    }
  };
  useEffect(() => {
    initDb()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Add New Product </Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          mode="outlined"
          label="Name"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Description"
          multiline
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          mode="outlined"
          label="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <Button onPress={imagePicker} icon={"camera"}>
          Take Image
        </Button>
        {image && <Image style={styles.imagePreview} source={{ uri: image }} />}
        <LocationPikcer />
        <Button onPress={handleSubmit}>Submit</Button>
      </View>
    </ScrollView>
  );
};

export default AddNewProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    color: MD3Colors.primary30,
    fontFamily: FONTS.RobotoSlab,
    fontWeight: "bold",
  },
  input: {
    width: Dimensions.get("window").width - 100,
    marginVertical: 10,
  },
  imagePreview: {
    width: Dimensions.get("window").width - 100,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
});
