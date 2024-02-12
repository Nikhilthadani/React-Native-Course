import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import User from "../screens/User";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const StacKNavigatorContainer = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="User" component={User} />
//     </Stack.Navigator>
//   );
// };
const TabNavContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "cadetblue",
      }}
    >
      <Tab.Screen
        options={{
          tabBarBadge: 3,
          tabBarIcon: (props) => <Icon name="home" {...props} />,
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{ tabBarIcon: (props) => <Icon name="user-o" {...props} /> }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

// drawer

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default Navigation;
