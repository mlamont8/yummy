export default function loadingStatus(state = null, action) {
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
