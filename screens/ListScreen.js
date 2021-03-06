import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import { connect } from "react-redux";
import ListItem from "./../components/ListItem";
import Loading from "./loading";

class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "List",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={"ios-restaurant"} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <Loading />
        ) : (
          <FlatList
            data={this.props.list}
            keyExtractor={item => item.id}
            renderItem={ListItem}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer.list,
  loading: state.loadingStatus.loading
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
