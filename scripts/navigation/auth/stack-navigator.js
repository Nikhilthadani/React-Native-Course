import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../../utils/constants";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthScreen.Login} component={Login} />
      <Stack.Screen name={AuthScreen.Signup} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
