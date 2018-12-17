export function fetchUserInput(inputtedState) {
  const lngAndLat = [];
  return function (dispatch) {
    return fetch(`https://liftie.info/api/meta`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      for (let i = 0; i < json.length; i++) {
        lngAndLat.push(json[i].ll);
      }
    });
  };
};
