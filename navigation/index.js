import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationScreens } from "../utils/constants";
import ProductsScreen from "../screens/products/ProductsScreen";
import ProductItemScreen from "../screens/products/ProductItemScreen";
import AddNewProductScreen from "../screens/add/AddNewProductScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MenuScreen from "../screens/menu/MenuScreen";

import Icon from "react-native-vector-icons/Feather";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabsNavigator />
    </NavigationContainer>
  );
};

const MainTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => <Icon {...props} name="home" size={20} />,
        }}
        name={ApplicationScreens.HOME_TAB}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add",
          tabBarIcon: (props) => <Icon {...props} name="plus" size={20} />,
        }}
        name={ApplicationScreens.ADD_TAB}
        component={AddProductNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => <Icon {...props} name="user" size={20} />,
        }}
        name={ApplicationScreens.PROFILE_TAB}
        component={ProfileStacknavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: (props) => <Icon {...props} name="menu" size={20} />,
        }}
        name={ApplicationScreens.MENU_TAB}
        component={MenuStackNavigator}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ApplicationScreens.PRODUCTS_SCREEN}
        component={ProductsScreen}
      />
      <Stack.Screen
        name={ApplicationScreens.PRODUCT_ITEM_SCREEN}
        component={ProductItemScreen}
      />
    </Stack.Navigator>
  );
};

const AddProductNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ApplicationScreens.ADD_PRODUCT_SCREEN}
        component={AddNewProductScreen}
      />
    </Stack.Navigator>
  );
};

const ProfileStacknavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ApplicationScreens.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
const MenuStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ApplicationScreens.MENU_SCREEN}
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
