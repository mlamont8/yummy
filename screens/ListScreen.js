import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { connect } from "react-redux";
// import { getList } from "./../actions";

class ListScreen extends React.Component {
  // componentDidMount() {
  //   this.props.getList(2, 3);
  // }

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

// const mapDispatchToProps = dispatch => {
//   return {
//     getList: (lat, long) => {
//       dispatch(getList(lat, long));
//     }
//   };
// };

const mapStateToProps = state => ({
  location: state.location
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
