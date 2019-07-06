import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import MapScreen from "../screens/MapScreen";

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Map: { screen: MapScreen }
});
