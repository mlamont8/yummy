import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import MapScreen from "../screens/MapScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-home"} />
  )
};

const ListStack = createStackNavigator({
  Lists: ListScreen
});

ListStack.navigationOptions = {
  tabBarLabel: "List",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-restaurant"} />
  )
};

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"ios-map"} />
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  MapStack
});
