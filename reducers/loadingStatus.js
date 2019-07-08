export default function loadingStatus(state = { loading: false }, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.status
      };
    default:
      return state;
  }
}
