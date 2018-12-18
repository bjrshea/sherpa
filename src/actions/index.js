import constants from './../constants';
import { openWeatherKey } from './../constants/openWeatherKey';
/*eslint-disable */
import Firebase from 'firebase';
/*eslint-enable */
const { firebaseConfig } = constants;

/*eslint-disable */
firebase.initializeApp(firebaseConfig);
const resorts = firebase.database().ref('resorts');
/*eslint-enable */

const coordsArray = [];
let statesArray = [];
console.log(statesArray)

export function getFirebaseResorts(userInput) {
  return function(dispatch) {
    resorts.on('child_added', data => {
      const resort = Object.assign({}, data.val(), {
        id: data.getKey()
      });
        if (resort.resortState === userInput) {
          statesArray.push(resort);
        }
    });
    dispatch(receiveResorts(statesArray));
  };
};

export function fetchWeather(inputtedState) {
  return function (dispatch) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=&lon=&APPID=${openWeatherKey}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json)
    })
  };
};

function receiveResorts(resortsFromFirebase) {
  return {
    type: 'RECEIVE_RESORTS',
    resorts: resortsFromFirebase
  }
};
