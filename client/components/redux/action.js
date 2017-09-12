// Action creators

function actionFetch() {
  return {
    type: "LOAD_DATA_BEGIN"
  };
}

function actionFetchSuccess(data) {
  return {
    type: "LOAD_DATA_SUCCESS",
    data: data
  };
}

function actionFetchFail(message) {
  return {
    type: "LOAD_DATA_FAIL",
    errorMessage: message
  }
}

// Actions

export function loadSomeData(url) {
  return (dispatch) => {
    dispatch(actionFetch());

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        else {
          throw response;
        }
      })
      .then((json) => {
        dispatch(actionFetchSuccess(json));
        // console.log(json);
      })
      .catch((exception) => {
        dispatch(actionFetchFail(exception.statusText || 'Unknown Error'));
      });
  }
}