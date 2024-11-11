import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FriendsScreens } from "../../utils/constants";
import AllFriends from "../../screens/friend/AllFriends";
import AddFriend from "../../screens/friend/AddFriend";
import FriendPage from "../../screens/friend/FriendPage";
import FriendAddExpense from "../../screens/friend/FriendAddExpense";
import FriendExpenseItem from "../../screens/friend/FriendExpenseItem";

const Stack = createNativeStackNavigator();

const FriendStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={FriendsScreens.AllFriends} component={AllFriends} />
      <Stack.Screen name={FriendsScreens.AddFriend} component={AddFriend} />
      <Stack.Screen name={FriendsScreens.FriendPage} component={FriendPage} />

      <Stack.Screen
        name={FriendsScreens.FriendAddExpense}
        component={FriendAddExpense}
      />
      <Stack.Screen
        name={FriendsScreens.FriendExpenseItem}
        component={FriendExpenseItem}
      />
    </Stack.Navigator>
  );
};

export default FriendStackNavigator;
