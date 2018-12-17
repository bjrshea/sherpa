import constants from './../constants';
import Firebase from 'firebase';
const { firebaseConfig } = constants;

/*eslint-disable */
firebase.initializeApp(firebaseConfig);
const resorts = firebase.database().ref('ski-sherpa');
/*eslint-enable */

console.log(resorts)

const coordsArray = [];
console.log(coordsArray);
const statesArray = [];
console.log(statesArray);

export function fetchWeather(inputtedState) {
  return function (dispatch) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=&lon=&APPID=`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json)
    })
  };
};

// export function fetchLocation() {
//   coordsArray.forEach(function(lngAndLat) {
//     console.log(lngAndLat);
//   });
// }
