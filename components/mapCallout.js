import React from "react";
import { View, Text, WebView, StyleSheet } from "react-native";

export default function MapCallout(props) {
  return (
    <View style={styles.callout}>
      <View style={styles.firstRow}>
        <Text numberOfLines={2} style={styles.text}>
          {props.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  callout: {
    width: 250,
    height: 110,
    borderRadius: 5
  },
  text: {
    color: "#000",
    fontWeight: "bold"
  },
  firstRow: {
    flex: 1,
    flexDirection: "row"
  }
});
