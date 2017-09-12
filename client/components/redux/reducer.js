export default function testReducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_DATA_BEGIN":
      return {
        isLoading: true,
        isError: false
      };

    case "LOAD_DATA_SUCCESS":
      return {
        isLoading: false,
        data: action.data
      }

    case "LOAD_DATA_FAIL":
      return {
        isLoading: false,
        errorMessage: action.message
      }

    default:
      return state;
  }
}
