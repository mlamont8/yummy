import React from "react";
import { View, Text, Image } from "react-native";

const ListItem = ({ item }) => (
  <View style={{ flex: 1, flexDirection: "row", height: 80, padding: 5 }}>
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{ uri: item.image_url }}
      />
    </View>

    <View style={{ flex: 3 }}>
      <Text numberOfLines={1}>{item.name}</Text>
      <Text numberOfLines={1}>{item.location.address1}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{(item.distance * 0.000621371).toFixed(1)} mi.</Text>
        <Text>{item.price}</Text>
      </View>
    </View>

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{item.rating}</Text>
    </View>
  </View>
);

export default ListItem;
