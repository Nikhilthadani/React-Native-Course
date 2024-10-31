import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Chip, PaperProvider, TextInput } from "react-native-paper";
import SplitByPercentage from "../../components/expense/SplitByPercentage";
import { useAppState } from "../../context/AppStateProvider";
import { getMembersOfGroup } from "../../sql/group-member/get";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SplitType = { percentage: "percentage", equally: "equally" };

const GroupAddExpsne = () => {
  const [users, setUsers] = useState([]);
  const groupId = useAppState().selectedGroup.id;
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmt, setExpenseAmt] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [splitType, setSetsplitType] = useState(SplitType.equally);
  const [expenseData, setExpenseData] = useState(null);

  useLayoutEffect(() => {
    getMembersOfGroup(groupId)
      .then(setUsers)
      .catch((err) => console.log(err));
  }, []);

  const splitByPercentage = () => {
    setSetsplitType(SplitType.percentage);
    setModalVisible(true);
  };
  const splitEqually = () => {
    setSetsplitType(SplitType.equally);
  };

  const onCloseModal = (data) => {
    setExpenseData(data);
    setModalVisible(false);
  };

  const createSplitHandler = () => {
    console.log("Splits Data: ", expenseData);
    console.log(
      "Users: ",
      users.map((u) => u.name)
    );
  };

  return (
    <PaperProvider>
      {splitType === SplitType.percentage && (
        <SplitByPercentage
          visible={modalVisible}
          closeModal={onCloseModal}
          users={users}
        />
      )}
      <View>
        <Text>Select Split Type</Text>
        <View style={styles.selectionView}>
          <Chip
            icon={splitType === SplitType.equally ? "check" : ""}
            onPress={splitEqually}
          >
            Equally
          </Chip>
          <Chip
            icon={splitType === SplitType.percentage ? "check" : ""}
            onPress={splitByPercentage}
          >
            Percentage
          </Chip>
        </View>
        <View style={styles.inputBox}>
          <Icon name="receipt" size={30} />
          <TextInput
            style={styles.input}
            mode="flat"
            value={expenseDesc}
            onChangeText={setExpenseDesc}
          />
        </View>
        <View style={styles.inputBox}>
          <Icon name="currency-rupee" size={30} />
          <TextInput
            value={expenseAmt}
            onChangeText={setExpenseAmt}
            keyboardType="number-pad"
            style={styles.input}
            mode="flat"
          />
        </View>
        <Button onPress={createSplitHandler}>Create Split</Button>
      </View>
    </PaperProvider>
  );
};

export default GroupAddExpsne;

const styles = StyleSheet.create({
  selectionView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    padding: 10,
  },
  input: {
    width: Dimensions.get("window").width - 150,
  },
});
