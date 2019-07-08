import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Config from "../config";

const apiKey = Config.google;

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
  const lat = location.coords.latitude;
  const long = location.coords.longitude;
  const config = {
    headers: { Authorization: `Bearer ${apiKey}` },
    params: {
      term: "restaurants",
      longitude: long,
      latitude: lat
    }
  };
  console.log(newApi);
  const url = `https://api.yelp.com/v3/businesses/search`;
  dispatch(loading(true));
  try {
    const response = await axios.get(url, config);
    dispatch(listFetchSuccess(response.data.businesses));
    dispatch(loading(false));
  } catch (error) {
    dispatch(listFetchError(error));
    dispatch(loading(false));
  }
};

const loading = status => ({
  type: "LOADING",
  status
});

const listFetchSuccess = response => ({
  type: "LIST_FETCH_SUCCESS",
  list: response
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
