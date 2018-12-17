const coordsArray = [];
console.log(coordsArray);

export function fetchUserInput(inputtedState) {
  return function (dispatch) {
    return fetch(`https://liftie.info/api/meta`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      for (let i = 0; i < json.length; i++) {
        coordsArray.push(json[i].ll);
      }
    })
  };
};

// export function fetchLocation() {
//   coordsArray.forEach(function(lngAndLat) {
//     console.log(lngAndLat);
//   });
// }
