import React from "react";
import MapView from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends React.Component {
  render() {
    return <MapView style={{ flex: 1 }} />;
  }
}

const mapStateToProps = state => ({
  list: state.listReducer.list,
  longitude: state.locationReducer.longitude,
  latitude: state.locationReducer.latitude
});

export default MapScreen;
