import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen, AuthScreen } from "../../utils/constants";
import AccountDetails from "../../screens/account/AccountDetails";

const Stack = createNativeStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AccountScreen.AccountDetails}
        component={AccountDetails}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
