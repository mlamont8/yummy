import React from "react";
import { Image, Text } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends React.Component {
  render() {
    let region = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    // t
    return (
      <MapView style={{ flex: 1 }} region={region}>
        {this.props.list.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.coordinates.latitude,
              longitude: marker.coordinates.longitude
            }}
            title={marker.name}
          >
            <Image source={require("../assets/images/restaurant-marker.png")} />
          </Marker>
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer.list,
  longitude: state.locationReducer.longitude,
  latitude: state.locationReducer.latitude
});

export default connect(
  mapStateToProps,
  null
)(MapScreen);
