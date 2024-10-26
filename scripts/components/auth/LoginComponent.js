import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthScreen } from "../../utils/constants";
import { useAuth } from "../../context/AuthProvider";

const LoginComponent = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log([userId, password]);
    try {
      await auth.login(Number(userId), password);
    } catch (error) {
      console.log(error);
    }
  };
  const switchToSignup = () => {
    navigation.navigate(AuthScreen.Signup);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Welcome Back, Login</Text>
      <TextInput
        style={styles.input}
        placeholder="UserId"
        value={userId}
        onChangeText={(e) => setUserId(e)}
      />
      <TextInput
        secureTextEntry={!showPassword}
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(e) => setPassword(e)}
        right={
          <TextInput.Icon
            onPress={togglePasswordVisibility}
            icon={showPassword ? "eye-off" : "eye"}
          />
        }
      />
      <Button
        style={styles.button}
        mode="contained-tonal"
        onPress={handleLogin}
      >
        Login
      </Button>
      <Button style={styles.button} onPress={switchToSignup}>
        New user? Signup instead
      </Button>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontWeight: "500",
    fontSize: 30,
    padding: 10,
  },
  input: {
    width: Dimensions.get("window").width - 100,
    maxHeight: 200,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
});
