const initialState = {
  locations: {}
};

export default function locationReducer(state = null, action) {
  switch (action.type) {
    case "GET_LOCATION":
      return {
        ...state
        // latitude: action.location.coords.latitude,
        // longitude: action.location.coords.longitude
      };
    default:
      return state;
  }
}
