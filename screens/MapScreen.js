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
            <Text>{marker.name}</Text>
            <Image
              source={{ uri: marker.image_url }}
              style={{ width: 20, height: 20, borderRadius: 10 }}
            />
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
