import constants from './../constants';
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
        dispatch(receiveResorts(resort));
        dispatch(fetchMtnId(resort.mtnId, resort.id));
        dispatch(fetchWeather(resort.lat, resort.lng, resort.id));
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
      console.log(firebaseId)
      const mtnId = json.id;
      const liftsOpen = json.lifts.stats.open;
      const liftsClosed = json.lifts.stats.closed;
      dispatch(receiveLiftie(website, firebaseId, mtnId, liftsOpen, liftsClosed))
    });
  };
};

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

export function fetchWeather(lat, lng, id) {
  return function (dispatch) {
    return fetch(`http://api.weatherunlocked.com/api/current/${lat},${lng}?app_id=a93272f6&app_key=e6b833a2cb3181ea749617dbd7c3df7c`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      const firebaseId = id;
      const tempFeelsLike = json.feelslike_f;
      const tempActual = json.temp_f;
      const windSpeed = json.windspd_mph;
      const description = json.wx_desc;
      const gif = json.wx_icon;
      dispatch(receiveWeather(firebaseId, tempFeelsLike, tempActual, windSpeed, description, gif))
    });
  };
};

function receiveWeather(firebaseId, tempFeelsLike, tempActual, windSpeed, description, gif) {
  console.log(firebaseId, tempFeelsLike, tempActual, windSpeed, description, gif)
  return {
    type: 'RECEIVE_WEATHER',
    firebaseId: firebaseId,
    tempFeelsLike: tempFeelsLike,
    tempActual: tempActual,
    windSpeed: windSpeed,
    description: description,
    gif: gif
  }
};
