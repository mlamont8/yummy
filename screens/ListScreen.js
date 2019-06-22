import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { connect } from "react-redux";
// import { getList } from "./../actions";

class ListScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}

        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer
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
