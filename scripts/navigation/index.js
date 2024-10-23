import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Tabs } from "../utils/constants";
import GroupStackNavigator from "./groups/stack-navigator";
import FriendStackNavigator from "./friends/stack-navigator";
import ActivityNavigator from "./activity/stack-navigator";
import AccountStackNavigator from "./account/stack-navigator";
import Icon from "react-native-vector-icons/Feather";
import AuthStackNavigator from "./account/stack-navigator";
import { useAuth } from "../context/AuthProvider";

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  const auth = useAuth();
  if (!auth.isLoggedIn) {
    return (
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <Icon {...props} name="users" size={20} />,
          }}
          name={Tabs.Groups}
          component={GroupStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <Icon {...props} name="user" size={20} />,
          }}
          name={Tabs.Friends}
          component={FriendStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => (
              <Icon {...props} name="activity" size={20} />
            ),
          }}
          name={Tabs.Activity}
          component={ActivityNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <Icon {...props} name="package" size={20} />,
          }}
          name={Tabs.Account}
          component={AccountStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
