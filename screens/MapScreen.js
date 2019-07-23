import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Text,
  View
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapCallout from "../components/mapCallout";
import TabBarIcon from "../components/TabBarIcon";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 150;
const CARD_WIDTH = 150;

class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Map",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={"ios-map"} />
    )
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.props.list.length) {
        index = this.props.list.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinates } = this.props.list[index];
          this.map.animateToRegion(
            {
              ...coordinates,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    let region = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    const interpolations = this.props.list.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp"
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp"
      });
      return { scale, opacity };
    });

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          ref={map => (this.map = map)}
          initialRegion={region}
        >
          {this.props.list.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale
                }
              ]
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity
            };

            return (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: marker.coordinates.latitude,
                  longitude: marker.coordinates.longitude
                }}
                title={marker.name}
              >
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
                {/* <Image source={require("../assets/images/restaurant-marker.png")} /> */}
              </Marker>
            );
          })}
        </MapView>

        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.props.list.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={{ uri: marker.image_url }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.name}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.location.address1}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
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

const styles = StyleSheet.create({
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden"
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)"
  }
});
