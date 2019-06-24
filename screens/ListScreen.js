import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { connect } from "react-redux";

class ListScreen extends React.Component {
  _keyExtractor = (item, index) => item.id;

  listItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "row", height: 80, padding: 5 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{
            uri: item.image_url
          }}
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          keyExtractor={item => item.id}
          renderItem={this.listItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer.list
});

export default connect(
  mapStateToProps,
  null
)(ListScreen);

ListScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});
