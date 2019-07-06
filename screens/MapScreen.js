import React from "react";
import { Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapCallout from "../components/mapCallout";
import TabBarIcon from "../components/TabBarIcon";
import { connect } from "react-redux";

class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Map",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={"ios-map"} />
    )
  };

  render() {
    let region = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    return (
      <MapView style={{ flex: 1 }} region={region} showsUserLocation>
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
            <Callout>
              <MapCallout {...marker} />
            </Callout>
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
