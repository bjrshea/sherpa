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
        dispatch(fetchMtnId(resort));
      }
    });
  };
};

export function fetchMtnId(resort) {
  return function (dispatch) {
    return fetch(`https://liftie.info/api/resort/${resort.mtnId}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json)
      const twitter = json.twitter.user;
      const website = json.href;
      const liftsOpen = json.lifts.stats.open;
      const liftsClosed = json.lifts.stats.closed;
      dispatch(fetchWeather(resort, twitter, website, liftsOpen, liftsClosed));
    });
  };
};

export function fetchWeather(resort, twitter, website, liftsOpen, liftsClosed) {
  return function (dispatch) {
    return fetch(`http://api.weatherunlocked.com/api/current/${resort.lat},${resort.lng}?app_id=a93272f6&app_key=e6b833a2cb3181ea749617dbd7c3df7c`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json)
      const tempFeelsLike = json.feelslike_f;
      const tempActual = json.temp_f;
      const windSpeed = json.windspd_mph;
      const description = json.wx_desc;
      let gif = json.wx_icon;
      let newGif = gif.replace('.gif', '');
      dispatch(receiveResorts(resort, twitter, website, liftsOpen, liftsClosed, tempFeelsLike, tempActual, windSpeed, description, newGif))
    });
  };
};

function receiveResorts(resort, twitter, website, liftsOpen, liftsClosed, tempFeelsLike, tempActual, windSpeed, description, gif) {
  return {
    type: 'RECEIVE_RESORTS',
    resorts: resort,
    website: website,
    twitter: twitter,
    liftsOpen: liftsOpen,
    liftsClosed: liftsClosed,
    tempFeelsLike: tempFeelsLike,
    tempActual: tempActual,
    windSpeed: windSpeed,
    description: description,
    gif: gif
  }
};
