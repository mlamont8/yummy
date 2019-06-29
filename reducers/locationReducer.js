export default function locationReducer(state = null, action) {
  switch (action.type) {
    case "GET_LOCATION_SUCCESS":
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
}
