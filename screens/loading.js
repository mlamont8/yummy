import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2980b9",
    justifyContent: "center"
  }
});

export default Loading;
