import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-home"} />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "List",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-restaurant"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"ios-map"} />
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
