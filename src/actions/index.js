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

export function getFirebaseResorts(userInput) {
  return function(dispatch) {
    resorts.on('child_added', data => {
      const resort = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      if (userInput === resort.resortState) {
        dispatch(receiveResorts(resort))
        dispatch(fetchMtnId(resort.mtnId, resort.id))
      }
    });
  };
};

function receiveResorts(resortFromFirebase) {
  return {
    type: 'RECEIVE_RESORTS',
    resorts: resortFromFirebase
  }
};

export function fetchMtnId(mtnId, id) {
  return function (dispatch) {
    return fetch(`https://liftie.info/api/resort/${mtnId}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      const website = json.href;
      const firebaseId = id;
      const mtnId = json.id;
      const liftsOpen = json.lifts.stats.open;
      const liftsClosed = json.lifts.stats.closed;
      dispatch(receiveLiftie(website, firebaseId, mtnId, liftsOpen, liftsClosed))
    });
  };
};

// dispatch(receiveLiftie(websiteArray))
function receiveLiftie(website, firebaseId, mtnId, liftsOpen, liftsClosed) {
  return {
    type: 'RECEIVE_LIFTIE',
    mtnId: mtnId,
    firebaseId: firebaseId,
    website: website,
    liftsOpen: liftsOpen,
    liftsClosed: liftsClosed
  }
};



// export function fetchWeather(lat, lng) {
//   console.log(lat, lng)
//   return function (dispatch) {
//     return fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&APPID=' + openWeatherKey).then(
//       response => response.json(),
//       error => console.log('An error occurred.', error)
//     ).then(function(json) {
//       const temp = json.main.temp;
//       const skies = json.weather[0].main;
//       console.log(temp)
//       dispatch(receiveWeather(temp, skies))
//     });
//   };
// };
//
// function receiveWeather(temp, skies) {
//   return {
//     type: 'RECEIVE_WEATHER',
//     temp: temp,
//     skies: skies
//   }
// };


// if (resort.resortState === userInput) {
//   statesArray.push(resort);
// }

// 45.3318
// 121.6652
