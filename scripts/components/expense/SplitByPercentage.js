import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Modal, Portal } from "react-native-paper";
import SelectPercentage from "./SelectPercentage";
const generateSplitData = (users) => {
  const data = {};
  const initialSplit = 100 / users.length;
  users.forEach((user) => {
    data[user.id] = initialSplit;
  });
  return data;
};

const SplitByPercentage = ({ visible, closeModal, users }) => {
  const [splitData, setSplitData] = useState({});

  useLayoutEffect(() => {
    setSplitData(generateSplitData(users));
  }, []);

  console.log(splitData);

  const checkIfPercentageOverlaps = () => {
    let sum = 0;
    Object.keys(splitData).forEach((key) => {
      sum += Number(splitData[key]);
    });
    if (sum > 100 || sum < 100) {
      return true;
    }
    return false;
  };

  const onUpdateData = () => {
    closeModal(splitData);
  };
  return (
    <Portal>
      <Modal
        contentContainerStyle={styles.modal}
        visible={visible}
        onDismiss={closeModal}
        dismissable
        dismissableBackButton
      >
        {/* <Text>{JSON.stringify(users)}</Text>
         */}
        {users.length > 0 && Object.keys(splitData).length > 0 && (
          <FlatList
            data={users}
            renderItem={(info) => (
              <SelectPercentage
                user={info.item}
                splitPercentage={splitData[`${info.item.id}`]}
                updateSplitPercentage={(splitPercentage) => {
                  setSplitData((prev) => ({
                    ...prev,
                    [`${info.item.id}`]: +splitPercentage,
                  }));
                }}
              />
            )}
          />
        )}
        <Button
          disabled={checkIfPercentageOverlaps()}
          onPress={onUpdateData}
          style={{ width: 300 }}
          mode="contained"
        >
          Update
        </Button>
      </Modal>
    </Portal>
  );
};

export default SplitByPercentage;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
