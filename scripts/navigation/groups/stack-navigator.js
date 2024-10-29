import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupScreens } from "../../utils/constants";
import AllGroups from "../../screens/group/AllGroups";
import AddGroup from "../../screens/group/AddGroup";
import GroupMembers from "../../screens/group/GroupMembers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupItemMain from "../../screens/group/GroupItemMain";
import GroupItemPersons from "../../screens/group/GroupItemPersons";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const GroupItemNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Splits",
          animationEnabled: true,
        }}
        name={GroupScreens.GroupItemMain}
        component={GroupItemMain}
      />
      <Tab.Screen
        options={{ title: "Members" }}
        name={GroupScreens.GroupItemPersons}
        component={GroupItemPersons}
      />
    </Tab.Navigator>
  );
};
const GroupStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={GroupScreens.AllGroups} component={AllGroups} />
      <Stack.Screen name={GroupScreens.AddGroup} component={AddGroup} />
      <Stack.Screen
        options={{ headerShown: true }}
        name={GroupScreens.GroupItem}
        component={GroupItemNavigator}
      />
      <Stack.Screen
        options={{ headerShown: true, headerShadowVisible: false }}
        name={GroupScreens.AddGroupMembers}
        component={GroupMembers}
      />
    </Stack.Navigator>
  );
};

export default GroupStackNavigator;
