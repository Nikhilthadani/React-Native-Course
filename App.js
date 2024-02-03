import React, { useState } from "react";
import { Button, StatusBar, View } from "react-native";

const App = () => {
  const [hide, setHide] = useState(false);
  return (
    <View>
      <Button title="Hide" onPress={() => setHide((prev) => !prev)} />
      <StatusBar
        hidden={hide}
        backgroundColor={"lightblue"}
        barStyle={"dark-content"}
      />
    </View>
  );
};
export default App;
