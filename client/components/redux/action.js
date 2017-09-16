// Action creators

function actionFetch() {
  return {
    type: "LOAD_DATA_BEGIN",
  };
}

function actionFetchSuccess(data) {
  return {
    type: "LOAD_DATA_SUCCESS",
    data,
  };
}

function actionFetchFail(message) {
  return {
    type: "LOAD_DATA_FAIL",
    errorMessage: message,
  };
}

// Actions

export default function loadSomeData(url) {
  return (dispatch) => {
    dispatch(actionFetch());

    return fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        dispatch(actionFetchSuccess(json));
      })
      .catch((exception) => {
        const errorMessage = (exception && exception.statusText)
          ? exception.statusText
          : "Unknown Error";
        dispatch(actionFetchFail(errorMessage));
      });
  };
}
