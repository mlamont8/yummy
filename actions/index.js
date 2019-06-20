import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export const getLocation = () => async dispatch => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status !== "granted") {
    dispatch({
      type: "GET_LOCATION_ERROR",
      status: status
    });
  } else {
    let location = await Location.getCurrentPositionAsync({});
    dispatch({
      type: "GET_LOCATION_SUCCESS",
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    });
  }
};
