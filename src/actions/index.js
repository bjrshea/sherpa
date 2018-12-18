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
const statesArray = [];

export function getFirebaseResorts(userInput) {
  return function(dispatch) {
    resorts.on('child_added', data => {
      const resort = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveResorts(resort))
    });
  };
};

function receiveResorts(resortsFromFirebase) {
  return {
    type: 'RECEIVE_RESORTS',
    resorts: resortsFromFirebase
  }
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


// if (resort.resortState === userInput) {
//   statesArray.push(resort);
// }
