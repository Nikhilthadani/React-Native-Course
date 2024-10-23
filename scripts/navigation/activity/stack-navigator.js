import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityScreen } from "../../utils/constants";
import AllActivities from "../../screens/activity/AllActivities";

const Stack = createNativeStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ActivityScreen.AllActivities}
        component={AllActivities}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;
