import { createDrawerNavigator } from "@react-navigation/drawer";
import { Assesments, Attendance, Home, Notification } from "../../../screens";
import BottomTabNavigator from "../BottomTabNavigator";
import CustomDrawer from "./CustomDrawer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, Center, Icon, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabParamList } from "../../types/types";

type DrawerScreens = {
  Home: undefined;
  Assessments: undefined;
  Attendance: undefined;
  Calendar: undefined;
  Notifications: undefined;
};

// Define the screens in the bottom tab navigator
type BottomTabScreens = {
  Home: undefined;
  Profile: undefined;
};

// Define the available routes across the navigators
type RootNavigatorRoutes = {
  Drawer: DrawerScreens;
  BottomTab: BottomTabScreens;
};

// Define the navigation props for each screen
type DrawerNavigationProps<T extends keyof DrawerScreens> = {
  navigation: BottomTabNavigationProp<RootNavigatorRoutes, "Drawer">;
  route: RouteProp<DrawerScreens, T>;
};

type BottomTabNavigationProps<T extends keyof BottomTabScreens> = {
  navigation: BottomTabNavigationProp<RootNavigatorRoutes, "BottomTab">;
  route: RouteProp<BottomTabScreens, T>;
};

// Define the complete root param list
export type RootDrawerParamList = {
  Drawer: DrawerScreens;
  BottomTab: BottomTabScreens;
};
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigator() {

  return (

    // <Drawer.Navigator
    //   drawerContent={(props: any) => <CustomDrawer {...props} />}
    //   initialRouteName="BottomTab"
    //   screenOptions={{
    //     headerShown: false, // Hide the header
    //     drawerItemStyle: { height: 0 }, // Hide the drawer items
    //     drawerLabel: () => null, // Hide drawer labels
    //     drawerIcon: () => null // Hide drawer icons
    //   }}
    // >
    //   <Drawer.Screen
    //     name="BottomTab"
    //     component={BottomTabNavigator}
    //     options={{
    //       swipeEnabled: true, // Enable swipe to open drawer
    //       drawerLabel: () => null, // Hide drawer label for this screen
    //       drawerIcon: () => null, // Hide drawer icon for this screen
    //     }}
    //   />
    // </Drawer.Navigator>

    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false, // Hide the header
        drawerItemStyle: { height: 0 }, // Hide the drawer items
        drawerLabel: () => null, // Hide drawer labels
        drawerIcon: () => null // Hide drawer icons
      }}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTabNavigator}

        options={{
          swipeEnabled: true,
          drawerLabel: "Home",
          drawerLabelStyle: { display: "none" },
          headerRightContainerStyle: { paddingRight: 10 },
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    textAlign: "left",
    fontSize: 16,
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginLeft: 5,
    marginVertical: 1,
    textAlign: "left",
    justifyContent: "flex-start",
    color: "black",
    height: 20,
  },
  buttonTextWrapper: {
    marginLeft: 8,
    flex: 1,
    padding: 0,
  },
});
