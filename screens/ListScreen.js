import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { connect } from "react-redux";
import ListItem from "./../components/ListItem";

class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          keyExtractor={item => item.id}
          renderItem={ListItem}
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
