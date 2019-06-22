import React from "react";
import { ScrollView, StyleSheet, View, FlatList, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { connect } from "react-redux";

class ListScreen extends React.Component {
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View style={{ flex: 1, height: 80 }}>
              <Text>{item.name}</Text>
            </View>
          )}
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
  }
});
