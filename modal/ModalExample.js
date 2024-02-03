import {
  Alert,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalStyles}>
            <TextInput style={styles.textInput} />
            <Button
              title="Close Modal"
              onPress={() => setModalVisible((prev) => !prev)}
            />
          </View>
        </View>
      </Modal>
      <Button
        title="Open Modal"
        onPress={() => setModalVisible((prev) => !prev)}
      />
    </View>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    margin: 15,
    fontSize: 20,
    padding: 10,
  },
  modalStyles: {
    elevation: 20,
    marginTop: 30,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "lightblue",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});
