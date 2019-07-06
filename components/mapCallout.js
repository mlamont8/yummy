import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MapCallout(props) {
  return (
    <View style={styles.callout}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  callout: {
    width: 30,
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
