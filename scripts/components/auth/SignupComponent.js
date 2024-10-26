import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthScreen } from "../../utils/constants";
import { useAuth } from "../../context/AuthProvider";

const SignupComponent = () => {
  const auth = useAuth();
  const navigation = useNavigation();
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async () => {
    console.log([name, password, phone, email]);
    try {
      await auth.signup(name, email, phone, password);
    } catch (error) {
      console.log(error);
    }
  };
  const switchToLogin = () => {
    navigation.navigate(AuthScreen.Login);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Welcome! Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(e) => setname(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(e) => setPhone(e)}
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
        onPress={handleSignup}
      >
        Register
      </Button>
      <Button style={styles.button} onPress={switchToLogin}>
        Already a user? Login instead
      </Button>
    </View>
  );
};

export default SignupComponent;

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
