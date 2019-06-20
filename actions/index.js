import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export const getLocation = () => async dispatch => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status !== "granted") {
    dispatch(fetchLocationError(status));
  } else {
    let location = await Location.getCurrentPositionAsync({});
    dispatch(fetchLocationSuccess(location));
    dispatch(fetchApi(location));
  }
};

const fetchApi = location => async dispatch => {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    dispatch(listFetchSuccess(response));
  } catch (error) {
    dispatch(listFetchError(error));
  }
};

const listFetchSuccess = response => ({
  type: "LIST_FETCH_SUCCESS",
  response
});

const listFetchError = error => ({
  type: "LIST_FETCH_ERROR",
  error
});

const fetchLocationError = status => ({
  type: "GET_LOCATION_ERROR",
  status
});

const fetchLocationSuccess = location => ({
  type: "GET_LOCATION_SUCCESS",
  longitude: location.coords.longitude,
  latitude: location.coords.latitude
});

// export const getList = (lat, long) => {
//   // console.log(lat, long);
// };
