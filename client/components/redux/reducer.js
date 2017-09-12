export default function testReducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_DATA_BEGIN":
      return Object.assign({}, state, {
        isLoading: true
      });

    case "LOAD_DATA_SUCCESS":
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });

    case "LOAD_DATA_FAIL":
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });

    default:
      return state;
  }
}
