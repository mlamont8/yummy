export default function listReducer(state = null, action) {
  switch (action.type) {
    case "LIST_FETCH_SUCCESS":
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
}
