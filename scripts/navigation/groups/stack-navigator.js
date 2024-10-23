import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupScreens } from "../../utils/constants";
import AllGroups from "../../screens/group/AllGroups";
import AddGroup from "../../screens/group/AddGroup";
import GroupItem from "../../screens/group/GroupItem";
import GroupMembers from "../../screens/group/GroupMembers";

const Stack = createNativeStackNavigator();
const GroupStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={GroupScreens.AllGroups} component={AllGroups} />
      <Stack.Screen name={GroupScreens.AddGroup} component={AddGroup} />
      <Stack.Screen name={GroupScreens.GroupItem} component={GroupItem} />
      <Stack.Screen name={GroupScreens.GroupMembers} component={GroupMembers} />
    </Stack.Navigator>
  );
};

export default GroupStackNavigator;
